function deletionReducer(state, action) {
  switch (action.type) {
    case 'START_DELETION':
      return {
        ...state,
        showLogin: !state.loggedIn,
        message: '',
        deleteButtonDisabled: true,
        loginError: '',
        showConfirmation: !!state.loggedIn,
      }
    case 'CANCEL_DELETION':
      return {
        ...state,
        showLogin: false,
        showConfirmation: false,
        showResult: false,
        message: 'Deletion canceled',
        deleteButtonDisabled: false,
      }
    case 'LOGIN':
      const passwordCorrect = action.payload === 'swordfish'
      return {
        ...state,
        showLogin: !passwordCorrect,
        showConfirmation: passwordCorrect,
        loginError: passwordCorrect ? '' : 'Invalid password',
        loggedIn: true,
      }
    case 'CONFIRM_DELETION':
      return {
        ...state,
        showConfirmation: false,
        showResult: true,
        message: 'Widget deleted',
      }
    case 'FINISH':
      return {
        ...state,
        showLogin: false,
        showConfirmation: false,
        showResult: false,
        deleteButtonDisabled: false,
      }
    default:
      throw new Error('Unknown action: ' + action.type)
  }
}

export default deletionReducer
