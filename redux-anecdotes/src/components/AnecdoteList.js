import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  
  const vote = (anecdote) => {
    store.dispatch(voteAnecdote(anecdote.id))
    store.dispatch(setNotification(`you voted "${anecdote.content}"`))
    setTimeout(() => store.dispatch(resetNotification()), 5000)
  }

  const sort = (a1, a2) => {
    if (a1.votes === a2.votes) return 0
    else return a1.votes < a2.votes ? 1 : -1
  }
  
  return (
    <div>
      {anecdotes.sort(sort).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
