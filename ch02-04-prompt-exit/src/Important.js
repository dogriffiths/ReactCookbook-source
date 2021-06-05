import { useEffect, useState } from 'react'
import { Prompt } from 'react-router-dom'

const Important = () => {
  let initialValue = 'Initial value'

  const [data, setData] = useState(initialValue)
  const [dirty, setDirty] = useState(false)

  useEffect(() => {
    if (data !== initialValue) {
      setDirty(true)
    }
  }, [data, initialValue])

  return (
    <div className="Important">
      <textarea
        onChange={(evt) => setData(evt.target.value)}
        cols={40}
        rows={12}
      >
        {data}
      </textarea>
      <br />
      <button onClick={() => setDirty(false)} disabled={!dirty}>
        Save
      </button>
      <Prompt
        when={dirty}
        message={() => 'Do you really want to leave?'}
      />
    </div>
  )
}

export default Important
