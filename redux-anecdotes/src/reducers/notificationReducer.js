const initialState = { message: '' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, message: action.data }
    default: return state
  }
}

export const setNotification = (data, timeout) => {
  return dispatch => {
    dispatch({ type: 'SET_NOTIFICATION', data })
    setTimeout(() => dispatch({
      type: 'SET_NOTIFICATION',
      data: ''
    }), timeout)
  }
}

export default reducer