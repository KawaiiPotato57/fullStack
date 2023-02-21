import React from "react";

function Course(props) {
  let sum = props.course.parts.reduce(function (accumulator, curValue) {
    return accumulator + curValue.exercises;
  }, 0);    
  return (
    <div>
      <h1> {props.course.name}</h1>
      <ul>
        <ul>
          {props.course.parts.map((part) => (
            <li key={part.id}>
              {part.name} {part.exercises}
            </li>
          ))}
        </ul>
      </ul>
      <h5>Total of {sum} exercises</h5>
    </div>
  );
}

export default Course;
