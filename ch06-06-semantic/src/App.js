import {
  Button,
  Form,
  Input,
  TextArea,
  Feed,
} from 'semantic-ui-react'
import './App.css'
import { useState } from 'react'

function App() {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  return (
    <div className="App">
      <Form>
        <Form.Field>
          <label htmlFor="author">Author</label>
          <Input
            value={author}
            id="author"
            onChange={(evt) => setAuthor(evt.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="text">Message</label>
          <TextArea
            value={text}
            id="text"
            onChange={(evt) => setText(evt.target.value)}
          />
        </Form.Field>
        <Button
          basic
          onClick={() => {
            setMessages((m) => [
              {
                icon: 'pencil',
                date: new Date().toString(),
                summary: author,
                extraText: text,
              },
              ...m,
            ])
            setAuthor('')
            setText('')
          }}
        >
          Post
        </Button>
      </Form>
      <Feed events={messages} />
    </div>
  )
}

export default App
