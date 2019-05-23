import React from 'react';
import { connect } from 'react-redux'
import useField from '../hooks/useField'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const newAnecdote = useField('text')

  const create = (event) => {
    event.preventDefault()
    props.createAnecdote(newAnecdote.input.value)
    props.setNotification(`you added "${newAnecdote.input.value}"`)
    setTimeout(() => props.resetNotification(), 5000)
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

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  resetNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
