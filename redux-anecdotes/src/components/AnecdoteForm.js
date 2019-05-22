import React from 'react';
import useField from '../hooks/useField'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store}) => {
  const newAnecdote = useField('text')

  const create = (event) => {
    event.preventDefault()
    store.dispatch(createAnecdote(newAnecdote.input.value))
    store.dispatch(setNotification(`you added "${newAnecdote.input.value}"`))
    setTimeout(() => store.dispatch(resetNotification()), 5000)
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
