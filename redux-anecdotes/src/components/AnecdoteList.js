import React from 'react';
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote.id)
    props.setNotification(`you voted "${anecdote.content}"`)
    setTimeout(() => resetNotification(), 5000)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote =>
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

const filteredAndSortedAnecdotes = ({ anecdotes, filter }) => {
  return anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.text.toLowerCase())
  ).sort((a1, a2) => {
    if (a1.votes === a2.votes) return 0
    else return a1.votes < a2.votes ? 1 : -1
  })
}

const mapStateToProps = (state) => {
  return {
    anecdotes: filteredAndSortedAnecdotes(state)
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
