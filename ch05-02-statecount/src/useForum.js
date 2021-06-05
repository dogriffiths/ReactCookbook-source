import { useCallback, useEffect, useState } from 'react'

const useForum = (forum) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [creating, setCreating] = useState(false)
  const [stateVersion, setStateVersion] = useState(0)

  const create = useCallback(
    async (message) => {
      try {
        setCreating(true)
        const response = await fetch(`/messages/${forum}`, {
          method: 'POST',
          body: JSON.stringify(message),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        if (!response.ok) {
          const text = await response.text()
          throw new Error(
            `Unable to create a ${forum} message: ${text}`
          )
        }
        setStateVersion((v) => v + 1)
      } finally {
        setCreating(false)
      }
    },
    [forum]
  )

  useEffect(() => {
    let didCancel = false
    setError(null)
    if (forum) {
      ;(async () => {
        try {
          setLoading(true)
          const response = await fetch(`/messages/${forum}`)
          if (!response.ok) {
            const text = await response.text()
            throw new Error(
              `Unable to read messages for ${forum}: ${text}`
            )
          }
          const body = await response.json()
          if (!didCancel) {
            setData(body)
          }
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      })()
    } else {
      setData([])
      setLoading(false)
    }
    return () => {
      didCancel = true
    }
  }, [forum, stateVersion])

  return { data, loading, error, create, creating }
}

export default useForum
