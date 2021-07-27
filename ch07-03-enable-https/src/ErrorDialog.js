import { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

const ErrorDialog = (props) => {
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [stringError, setStringError] = useState()

  useEffect(() => {
    setStringError(
      props.error
        ? typeof props.error === 'string'
          ? props.error
          : JSON.stringify(props.error, null, 2)
        : null
    )
  }, [props.error])

  useEffect(() => {
    if (stringError) {
      const lines = stringError.split('\n')
      setHeight(lines.length)
      setWidth(lines.reduce((a, b) => (a < b ? b : a), 100))
    }
  }, [stringError])

  return (
    <Dialog
      onClose={props.onClose}
      aria-labelledby="simple-dialog-title"
      open={props.error}
    >
      <DialogTitle id="simple-dialog-title">
        {props.title}
      </DialogTitle>
      <DialogContent>
        Something bad happened. The details of the error are below.
        Please copy them and send them to systems support.
        <p />
        <textarea
          id="ErrorDialog-error"
          readOnly
          style={{
            height: height * 14 + 'px',
            width: width + 'ex',
          }}
        >
          {stringError}
        </textarea>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            const copyText = document.getElementById(
              'ErrorDialog-error'
            )
            copyText.select()
            document.execCommand('copy')
            props.onClose()
          }}
          color="primary"
        >
          Copy Error
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ErrorDialog
