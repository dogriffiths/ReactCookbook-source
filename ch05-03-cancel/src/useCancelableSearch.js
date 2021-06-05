import { useEffect, useState } from 'react'
import axios from 'axios'

const useCancelableSearch = (terms) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setError(null)
    if (terms) {
      const source = axios.CancelToken.source()
      ;(async () => {
        try {
          setLoading(true)
          const response = await axios.get('/search', {
            params: { terms },
            cancelToken: source.token,
          })
          setData(response.data)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      })()

      return () => {
        source.cancel('axios request cancelled')
      }
    } else {
      setData([])
      setLoading(false)
    }
  }, [terms])

  return { data, loading, error }
}

export default useCancelableSearch
