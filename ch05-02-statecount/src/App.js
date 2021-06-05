import './App.css'
import { useState } from 'react'
import useForum from './useForum'

function App() {
  const {
    data: messages,
    loading: messagesLoading,
    error: messagesError,
    create: createMessage,
    creating: creatingMessage,
  } = useForum('nasa')
  const [text, setText] = useState()
  const [author, setAuthor] = useState()
  const [createMessageError, setCreateMessageError] = useState()

  return (
    <div className="App">
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={(evt) => setAuthor(evt.target.value)}
      />
      <textarea
        value={text}
        placeholder="Message"
        onChange={(evt) => setText(evt.target.value)}
      />
      <button
        onClick={async () => {
          try {
            await createMessage({ author, text })
            setText('')
            setAuthor('')
          } catch (err) {
            setCreateMessageError(err)
          }
        }}
        disabled={creatingMessage}
      >
        Post
      </button>
      {createMessageError ? (
        <div className="error">
          Unable to create message
          <div className="error-contents">
            {createMessageError.message}
          </div>
        </div>
      ) : null}
      {messagesError ? (
        <div className="error">
          Something went wrong:
          <div className="error-contents">
            {messagesError.message}
          </div>
        </div>
      ) : messagesLoading ? (
        <div className="loading">Loading...</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((m) => (
            <>
              <dt>{m.author}</dt>
              <dd>{m.text}</dd>
            </>
          ))}
        </dl>
      ) : (
        'No messages'
      )}
    </div>
  )
}

export default App
