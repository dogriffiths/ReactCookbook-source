import axios from 'axios'

const axiosMiddleware = (store) => (next) => (action) => {
  if (action.type === 'SEARCH') {
    const terms = action.payload
    if (terms) {
      ;(async () => {
        try {
          store.dispatch({
            type: 'SEARCH_RESULTS',
            payload: {
              loading: true,
              data: null,
              error: null,
            },
          })
          const response = await axios.get('/search', {
            params: { terms },
          })
          store.dispatch({
            type: 'SEARCH_RESULTS',
            payload: {
              loading: false,
              error: null,
              data: response.data,
            },
          })
        } catch (err) {
          store.dispatch({
            type: 'SEARCH_RESULTS',
            payload: {
              loading: false,
              error: err,
              data: null,
            },
          })
        }
      })()
    }
  }
  return next(action)
}
export default axiosMiddleware
