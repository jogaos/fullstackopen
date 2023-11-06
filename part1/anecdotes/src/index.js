import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdote = ({title, anecdote, votes}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
    </div>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * (anecdotes.length - 0) + 0))
  
  const increaseVotes = () => {
    const copyPoints = [...points];
    copyPoints[selected] += 1;
    setPoints(copyPoints);
  }

  const maxVotes = () => {
    return points.indexOf(Math.max(...points));
  }

  return (
    <div>
      <Anecdote title="Anecdote of the day" anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={increaseVotes} text="vote" />
      <Button handleClick={nextAnecdote} text="next anecdote" />
      <Anecdote title="Anecdote with most votes" anecdote={anecdotes[maxVotes()]} votes={points[maxVotes()]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)