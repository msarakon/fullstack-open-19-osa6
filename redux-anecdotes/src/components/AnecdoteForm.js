import React from 'react';
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'
import useField from '../hooks/useField'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const newAnecdote = useField('text')

  const create = async (event) => {
    event.preventDefault()
    const anecdote = await anecdoteService.createNew(newAnecdote.input.value)
    props.createAnecdote(anecdote)
    props.setNotification(`you added "${anecdote.content}"`)
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
