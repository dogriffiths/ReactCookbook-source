import ErrorHandlerContext from './ErrorHandlerContext'

let setError = () => {}

export default (props) => {
  if (props.callback) {
    setError = props.callback
  }

  return (
    <ErrorHandlerContext.Provider value={setError}>
      {props.children}
    </ErrorHandlerContext.Provider>
  )
}
