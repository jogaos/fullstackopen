import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.course.name} {props.course.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part course={props.course1} />
      <Part course={props.course2} />
      <Part course={props.course3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExercises}</p>
    </div>
  )
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
      }]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content course1={course.parts[0]}
        course2={course.parts[1]}
        course3={course.parts[2]} />
      <Total totalExercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))