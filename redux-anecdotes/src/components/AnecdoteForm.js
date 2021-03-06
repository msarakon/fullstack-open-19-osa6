import React from 'react';
import { connect } from 'react-redux'
import useField from '../hooks/useField'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const newAnecdote = useField('text')

  const create = async (event) => {
    event.preventDefault()
    const content = newAnecdote.input.value
    props.createAnecdote(newAnecdote.input.value)
    props.setNotification(`you added "${content}"`)
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

const mapDispatchToProps = { createAnecdote, setNotification }

export default connect(null, mapDispatchToProps)(AnecdoteForm)
