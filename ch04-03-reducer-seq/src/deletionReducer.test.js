import deletionReducer from './deletionReducer'

describe('deletionReducer', () => {
  it('should show the login dialog if we are not logged in', () => {
    const actual = deletionReducer({}, { type: 'START_DELETION' })
    expect(actual.showLogin).toBe(true)
    expect(actual.message).toBe('')
    expect(actual.deleteButtonDisabled).toBe(true)
    expect(actual.loginError).toBe('')
    expect(actual.showConfirmation).toBe(false)
  })
  it('should now show the login dialog if we are already logged in', () => {
    const actual = deletionReducer(
      { loggedIn: true },
      { type: 'START_DELETION' }
    )
    expect(actual.showLogin).toBe(false)
    expect(actual.showConfirmation).toBe(true)
  })
  it('should be able to cancel the login and no dialogs will be visible', () => {
    const actual = deletionReducer(
      { showLogin: true },
      { type: 'CANCEL_DELETION' }
    )
    expect(actual.showLogin).toBe(false)
    expect(actual.showConfirmation).toBe(false)
    expect(actual.showResult).toBe(false)
    expect(actual.message).toBe('Deletion canceled')
    expect(actual.deleteButtonDisabled).toBe(false)
  })
  it('should not get past login if the password is wrong', () => {
    const actual = deletionReducer(
      { showLogin: true },
      { type: 'LOGIN', payload: 'wrongpassword' }
    )
    expect(actual.showLogin).toBe(true)
    expect(actual.showConfirmation).toBe(false)
    expect(actual.loginError).toBe('Invalid password')
  })
  it('should get past login if the password is correct', () => {
    const actual = deletionReducer(
      { showLogin: true },
      { type: 'LOGIN', payload: 'swordfish' }
    )
    expect(actual.showLogin).toBe(false)
    expect(actual.showConfirmation).toBe(true)
    expect(actual.loginError).toBe('')
    expect(actual.loggedIn).toBe(true)
  })
  it('should show deletion result if the deletion is confirmed', () => {
    const actual = deletionReducer(
      { showConfirmation: true },
      { type: 'CONFIRM_DELETION' }
    )
    expect(actual.showConfirmation).toBe(false)
    expect(actual.showResult).toBe(true)
    expect(actual.message).toBe('Widget deleted')
  })
  it('should show hide the steps and enable the button when finished', () => {
    const actual = deletionReducer(
      { showConfirmation: true, message: 'Hello' },
      { type: 'FINISH' }
    )
    expect(actual.showLogin).toBe(false)
    expect(actual.showConfirmation).toBe(false)
    expect(actual.showResult).toBe(false)
    expect(actual.message).toBe('Hello')
    expect(actual.deleteButtonDisabled).toBe(false)
  })
  it('should throw an error if an unknown action is dispatched', () => {
    const t = () => deletionReducer({}, { type: 'SOMETHING_BAD' })
    expect(t).toThrow(new Error('Unknown action: SOMETHING_BAD'))
  })
})
