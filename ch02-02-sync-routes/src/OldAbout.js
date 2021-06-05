import { useState } from 'react'
import People from './People'
import Offices from './Offices'

import './About.css'

const OldAbout = () => {
  const [tabId, setTabId] = useState('people')

  return (
    <div className="About">
      <div className="About-tabs">
        <div
          onClick={() => setTabId('people')}
          className={
            tabId === 'people' ? 'About-tab active' : 'About-tab'
          }
        >
          People
        </div>
        <div
          onClick={() => setTabId('offices')}
          className={
            tabId === 'offices' ? 'About-tab active' : 'About-tab'
          }
        >
          Offices
        </div>
      </div>
      {tabId === 'people' && <People />}
      {tabId === 'offices' && <Offices />}
    </div>
  )
}

export default OldAbout
