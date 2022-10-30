import React from 'react'
import ReactDOM from 'react-dom'



// Course Name
// Example of on line return
const Header = (props) => <h1>{props.courseName}</h1>

// Parts of the course and number of exercises
// This have the "props" destructurated into part and exercise
const Content = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  )
}

// Represent total number of exercises
// Destructurate props inside function and return without ()
const Total = (props) => {

  const { exercises1, exercises2, exercises3 } = props

  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Content part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Content part={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))