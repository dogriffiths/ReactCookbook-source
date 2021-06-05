import { useEffect, useState } from 'react'
import axios from 'axios'

const useDebouncedSearch = (terms) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setError(null)
    if (terms) {
      const newTimer = setTimeout(() => {
        ;(async () => {
          try {
            setLoading(true)
            const response = await axios.get('/search', {
              params: { terms },
            })
            setData(response.data)
          } catch (err) {
            setError(err)
          } finally {
            setLoading(false)
          }
        })()
      }, 500)
      return () => clearTimeout(newTimer)
    } else {
      setData([])
      setLoading(false)
    }
  }, [terms])

  return { data, loading, error }
}

export default useDebouncedSearch
