import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

const MarkdownForum = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  return (
    <section className="Forum">
      <MDEditor height={300} value={text} onChange={setText} />
      <button
        onClick={() => {
          setMessages((msgs) => [
            {
              body: text,
              timestamp: new Date().toISOString(),
            },
            ...msgs,
          ])
          setText('')
        }}
      >
        Post
      </button>
      {messages.map((msg) => {
        return (
          <dl>
            <dt>{msg.timestamp}</dt>
            <dd>
              <MDEditor.Markdown source={msg.body} />
            </dd>
          </dl>
        )
      })}
    </section>
  )
}

export default MarkdownForum
