import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_ANECDOTE':
      return state.map(a =>
        a.id === action.data.id ? action.data : a)
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const data = await anecdoteService.update({
      ...anecdote, votes: anecdote.votes + 1
    })
    dispatch({ type: 'UPDATE_ANECDOTE', data })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const data = await anecdoteService.createNew(content)
    dispatch({ type: 'NEW_ANECDOTE', data })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch({ type: 'INIT_ANECDOTES', data })
  }
}

export default reducer