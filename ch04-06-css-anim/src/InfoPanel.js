import { useState } from 'react'

import './InfoPanel.css'

const InfoPanel = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <section className="InfoPanel">
      <h1>
        {title}
        <button onClick={() => setOpen((v) => !v)}>
          {open ? '^' : '​v'}
        </button>
      </h1>
      <div
        className={`InfoPanel-details ${
          open ? '' : 'InfoPanel-details-closed'
        }`}
      >
        {children}
      </div>
    </section>
  )
}

export default InfoPanel
