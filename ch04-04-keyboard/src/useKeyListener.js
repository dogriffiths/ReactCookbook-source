import { useEffect } from 'react'

const useKeyListener = (callback) => {
  useEffect(() => {
    const listener = (e) => {
      e = e || window.event
      const tagName = e.target.localName || e.target.tagName
      // Only accept key-events that originated at the body level
      // to avoid key-strokes in e.g. text-fields being included
      if (tagName.toUpperCase() === 'BODY') {
        callback(e)
      }
    }
    document.addEventListener('keydown', listener, true)
    return () => {
      document.removeEventListener('keydown', listener, true)
    }
  }, [callback])
}

export default useKeyListener
