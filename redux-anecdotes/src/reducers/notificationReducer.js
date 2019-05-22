const initialState = { message: '' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, notification: action.message }
    default: return state
  }
}

export default reducer