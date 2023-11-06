import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

/*const StatisticLine = ({ text, value }) => {
  return (<div>{text}: {value}</div>)
}*/

const StatisticsTable = ({ statisticsData }) => {
  return (
    <table>
      <tbody>
        {statisticsData.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all;
  const positive = ((good / all) * 100) + '%';

  const statisticsData = [
    { name: "good", value: good },
    { name: "neutral", value: neutral },
    { name: "bad", value: bad },
    { name: "all", value: all },
    { name: "average", value: average },
    { name: "positive", value: positive },
  ]

  if (all > 0) {
    return (
      <div>
        <h2>statistics</h2>
        {/*}<StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />*/}
        <StatisticsTable statisticsData={statisticsData} />
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>statistics</h2>
        No feedback given
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

/*
ReactDOM.render(<App />,
  document.getElementById('root')
)*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);