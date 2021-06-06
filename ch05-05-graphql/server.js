const { ApolloServer } = require('apollo-server')
const requireText = require('require-text')

const typeDefs = requireText('./schema.graphql', require)

const messages = [
  {
    id: 0,
    author: 'SC',
    text: 'Rolls complete and a pitch is program. One BRAVO.',
  },
  {
    id: 1,
    author: 'PAO',
    text: 'One BRAVO is an abort control model. Altitude is 2 miles.',
  },
  {
    id: 2,
    author: 'CAPCOM',
    text: 'All is well at Houston. You are good at 1 minute.',
  },
]

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    addMessage: (parent, message) => {
      const item = { id: messages.length + 1, ...message }
      messages.push(item)
      return item
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀 Launched at ${url}!`)
})
