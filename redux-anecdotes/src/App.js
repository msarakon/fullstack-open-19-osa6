import React from 'react';
import useField from './hooks/useField'

const App = ({ store }) => {
  const anecdotes = store.getState()
  const newAnecdote = useField('text')
  
  const vote = (id) => {
    store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  const create = (event) => {
    event.preventDefault()
    store.dispatch({
      type: 'NEW',
      data: { anecdote: newAnecdote.input.value }
    })
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
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
      <form>
        <div><input {...newAnecdote.input} /></div>
        <button onClick={create}>create</button>
      </form>
    </div>
  )
}

export default App
