import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const total = good + bad + neutral
  const positive = (good * 100) / total
  const average = [good + -(bad)] / total

  return (
    <div className="statistics-container">
      <h1>Feedbacks statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <Statistic text={"Good"} value={good}/>
            <Statistic text={"Neutral"} value={neutral}/>
            <Statistic text={"Bad"} value={bad}/>
            <Statistic text={"Total"} value={total}/>
            <Statistic text={"Positive"} value={positive ? positive : 0}/>
            <Statistic text={"Average"} value={average}/>
          </tbody>
        </table>
      )}
    </div>
  )
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    const newGood = good + 1;
    setGood(newGood)
  }

  const handleClickNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral)
  }

  const handleClickBad = () => {
    const newBad = bad + 1;
    setBad(newBad)
  }

  return (
    <div>
      <div className="give-feedback">
        <h1>Give us a feedback</h1>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)