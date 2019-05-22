const initialState = { text: '' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, text: action.data.text }
    default: return state
  }
}

export const setFilter = (text) => {
  return {
    type: 'SET_FILTER',
    data: { text: text }
  }
}

export default reducer