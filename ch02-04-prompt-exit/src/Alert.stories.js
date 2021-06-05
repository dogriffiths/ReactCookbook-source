import { useState } from 'react'

import Alert from './Alert'

export default {
  title: 'Alert',
}

export const Basic = () => <Alert />

export const WithOpen = () => <Alert open />

export const WithTitle = () => <Alert title="Leave page?" open />

export const WithMessage = () => (
  <Alert
    title="Leave page?"
    message="You have made changes. Sure you want to leave?"
    open
  />
)

export const WithOnCancelAndConfirm = () => {
  const [clickName, setClickName] = useState()

  return (
    <div>
      Last click: {clickName}
      <Alert
        title="Leave page?"
        message="You have made changes. Sure you want to leave?"
        onOK={() => setClickName('OK')}
        onCancel={() => setClickName('Cancel')}
        open
      />
    </div>
  )
}
