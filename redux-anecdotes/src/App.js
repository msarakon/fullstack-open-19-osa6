import React from 'react';
import { voteAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = ({ store }) => {
  const anecdotes = store.getState()
  
  const vote = (id) => {
    store.dispatch(voteAnecdote(id))
  }

  const sort = (a1, a2) => {
    if (a1.votes === a2.votes) return 0
    else return a1.votes < a2.votes ? 1 : -1
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort(sort).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <AnecdoteForm store={store}/>
    </div>
  )
}

export default App
