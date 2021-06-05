import { useCallback, useState } from 'react'
import ErrorHandlerProvider from './ErrorHandlerProvider'
import ErrorDialog from './ErrorDialog'

const ErrorContainer = (props) => {
  const [error, setError] = useState()
  const [errorTitle, setErrorTitle] = useState()
  const [action, setAction] = useState()

  if (error) {
    console.error(
      'An error has been thrown',
      errorTitle,
      JSON.stringify(error)
    )
  }

  const callback = useCallback((title, err, action) => {
    console.error('ERROR RAISED ')
    console.error('Error title: ', title)
    console.error('Error content', JSON.stringify(err))
    setError(err)
    setErrorTitle(title)
    setAction(action)
  }, [])
  return (
    <ErrorHandlerProvider callback={callback}>
      {props.children}

      {error && (
        <ErrorDialog
          title={errorTitle}
          onClose={() => {
            setError(null)
            setErrorTitle('')
          }}
          action={action}
          error={error}
        />
      )}
    </ErrorHandlerProvider>
  )
}

export default ErrorContainer
