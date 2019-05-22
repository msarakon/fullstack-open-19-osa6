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
    <form>
      <div><input {...newAnecdote.input} /></div>
      <button onClick={create}>create</button>
    </form>
  )
}

export default AnecdoteForm
