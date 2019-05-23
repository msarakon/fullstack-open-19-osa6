import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = (props) => {
  const init = props.initAnecdotes

  useEffect(() => {
    init()
  }, [init])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default connect(null, { initAnecdotes })(App)
