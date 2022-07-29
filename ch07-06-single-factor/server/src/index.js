import {
  generateAssertionOptions,
  generateAttestationOptions,
  verifyAttestationResponse,
  verifyAssertionResponse,
} from '@simplewebauthn/server'
import express from 'express'
import cookieParser from 'cookie-parser'

const rpName = 'Physical Token Server'
const rpID = 'localhost'
const origin = `http://${rpID}:3000`

const users = [
  {
    id: '1234',
    username: 'freda',
    password: 'mypassword',
    devices: [],
    authenticators: {},
  },
]

const sessions = {}

const app = express()
app.use(cookieParser())

app.use(express.json())

app.post('/login', (request, response) => {
  const { username, password } = request.body
  const user = users.find(
    (u) => u.username === username && u.password === password
  )
  if (!user) {
    return response
      .status(403)
      .send({ message: 'Invalid username or password' })
  }
  if (Object.keys(user.authenticators).length) {
    return response.status(200).send({
      userID: user.id,
      message: 'Security key required',
      twoFactorNeeded: true,
    })
  }
  const newSession = Math.random()
  sessions[newSession] = { user }
  return response
    .status(200)
    .cookie('userID', user.id)
    .cookie('__session', newSession)
    .send({ userID: user.id, message: 'Logged in' })
})

app.post('/logout', (request, response) => {
  if (request.cookies && request.cookies['__session']) {
    delete sessions[request.cookies['__session']]
  }

  return response
    .status(200)
    .clearCookie('__session')
    .send({ message: 'Logged out' })
})

const secured = (callback) => async (req, res) => {
  if (!req.cookies || !req.cookies['__session']) {
    res.status(401).send('Not authorized')
    return
  }

  const isValid =
    req.cookies['__session'] && sessions[req.cookies['__session']]

  if (!isValid) {
    res.status(401).send('Not authorized')
    return
  }

  await callback(req, res)
}

app.get(
  '/account',
  secured((request, response) => {
    const sessionID = request.cookies['__session']
    const { user } = sessions[sessionID]
    response.send({ user })
  })
)

app.post('/startRegister', (request, response) => {
  const sessionID = request.cookies['__session']
  const { user } = sessions[sessionID]
  const userID = user.id

  const options = generateAttestationOptions({
    rpName,
    rpID,
    userID,
    userName: user.username,
    excludeCredentials: user.devices.map((dev) => ({
      id: dev.credentialID,
      type: 'public-key',
    })),
    authenticatorSelection: { userVerification: 'discouraged' },
    extensions: {
      credProps: true,
    },
  })

  user.currentChallenge = options.challenge
  response.send(options)
})

app.post('/startFingerprint', (request, response) => {
  const sessionID = request.cookies['__session']
  const { user } = sessions[sessionID]
  const userID = user.id

  const options = generateAttestationOptions({
    rpName,
    rpID,
    userID,
    userName: user.username,
    excludeCredentials: user.devices.map((dev) => ({
      id: dev.credentialID,
      type: 'public-key',
    })),
    authenticatorSelection: {
      authenticatorAttachment: 'platform',
      userVerification: 'required',
    },
    extensions: {
      credProps: true,
    },
  })

  options.attestation = 'direct'

  user.currentChallenge = options.challenge
  console.log('Send back options', options)
  response.send(options)
})

app.post('/register', async (request, response) => {
  const { attestation } = request.body
  const sessionID = request.cookies['__session']
  const { user } = sessions[sessionID]

  const expectedChallenge = user.currentChallenge

  let verification
  try {
    verification = await verifyAttestationResponse({
      credential: attestation,
      expectedChallenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
    })
  } catch (error) {
    console.error(error)
    return response.status(400).send({ error: error.message })
  }

  const { verified, authenticatorInfo } = verification

  const { base64PublicKey, base64CredentialID, counter } =
    authenticatorInfo

  user.authenticators[base64CredentialID] = {
    credentialID: base64CredentialID,
    publicKey: base64PublicKey,
    counter,
  }

  user.devices.push({ credentialID: base64CredentialID })

  response.cookie('userID', user.id).send({ verified })
})

app.post('/startVerify', (request, response) => {
  const { userID } = request.body
  const user = users.find((u) => u.id === userID)

  const options = generateAssertionOptions({
    allowCredentials: user.devices.map((dev) => ({
      id: dev.credentialID,
      type: 'public-key',
    })),
    attestation: 'direct',
    // extensions: {
    //   credProps: true,
    // },
    rpID,
  })

  user.currentChallenge = options.challenge
  response.send(options)
})

app.post('/verify', async (request, response) => {
  const { userID, assertion } = request.body
  const user = users.find((u) => u.id === userID)

  const expectedChallenge = user.currentChallenge

  const authenticator = user.authenticators[assertion.id]

  if (!authenticator) {
    response
      .status(403)
      .send(
        `Could not find authenticator ${assertion.id} for user ${user.id}`
      )
  }

  let verification
  try {
    verification = await verifyAssertionResponse({
      credential: assertion,
      expectedChallenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
      authenticator,
    })
  } catch (error) {
    console.error(error)
    return response.status(400).send({ error: error.message })
  }

  const { verified, authenticatorInfo } = verification

  const { counter } = authenticatorInfo

  user.authenticators[assertion.id].counter = counter

  const newSession = Math.random()
  sessions[newSession] = { user }

  response
    .status(200)
    .cookie('__session', newSession)
    .send({ verified })
})

app.listen(5000, () => console.log('🚀 Launched on port 5000!'))
