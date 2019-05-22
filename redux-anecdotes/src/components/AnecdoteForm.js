import React from 'react';
import useField from '../hooks/useField'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store}) => {
  const newAnecdote = useField('text')

  const create = (event) => {
    event.preventDefault()
    store.dispatch(createAnecdote(newAnecdote.input.value))
  }
  
  return (
    <div>
      <h2>create new</h2>
      <form>
        <div><input {...newAnecdote.input} /></div>
        <button onClick={create}>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
