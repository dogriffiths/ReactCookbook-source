import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useState } from 'react'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="App">
      <h1>VC Funding Registration</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="startupName">
            <Form.Label>Startup name</Form.Label>
            <Form.Control placeholder="No names ending in ...ly, please" />
          </Form.Group>
          <Form.Group as={Col} controlId="market">
            <Form.Label>Market</Form.Label>
            <Form.Control placeholder="e.g. seniors on Tik-Tok" />
          </Form.Group>
          <Form.Group as={Col} controlId="appType">
            <Form.Label>Type of application</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Progressive web application</option>
              <option>Conservative web application</option>
              <option>Android native</option>
              <option>iOS native</option>
              <option>New Jersey native</option>
              <option>VT220</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
        </Form.Row>

        <Form.Group id="technologiesUsed">
          <Form.Label>
            Technologies used (check at least 3)
          </Form.Label>
          <Form.Control as="select" multiple>
            <option>Blockchain</option>
            <option>Machine learning</option>
            <option>Quantum computing</option>
            <option>Autonomous vehicles</option>
            <option>For-loops</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={() => setSubmitted(true)}>
          Submit
        </Button>
      </Form>
      <Alert
        show={submitted}
        variant="success"
        onClose={() => setSubmitted(false)}
        dismissible
      >
        <Alert.Heading>We'll be in touch!</Alert.Heading>
        <p>One of our partners will be in touch shortly.</p>
      </Alert>
    </div>
  )
}

export default App
