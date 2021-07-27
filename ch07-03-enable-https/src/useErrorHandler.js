import ErrorHandlerContext from './ErrorHandlerContext'
import { useContext } from 'react'

const useErrorHandler = () => useContext(ErrorHandlerContext)

export default useErrorHandler
