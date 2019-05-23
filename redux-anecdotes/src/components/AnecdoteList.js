import React from 'react';
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes
  
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote.id)
    props.setNotification(`you voted "${anecdote.content}"`)
    setTimeout(() => resetNotification(), 5000)
  }

  const sort = (a1, a2) => {
    if (a1.votes === a2.votes) return 0
    else return a1.votes < a2.votes ? 1 : -1
  }

  const filter = (anecdote) => {
    return anecdote.content.toLowerCase()
      .includes(props.filter.text.toLowerCase())
  }
  
  return (
    <div>
      {anecdotes.filter(filter).sort(sort).map(anecdote =>
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
  resetNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
