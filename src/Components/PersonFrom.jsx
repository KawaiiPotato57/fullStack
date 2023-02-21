import React from 'react'
import { useState } from "react";

function PersonFrom(props) {
    
      
      const [newPerson, setNewPerson] = useState({ name: "", number: "" });

      const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
          name: newPerson.name,
          number: newPerson.number,
          id: props.persons.length + 1,
        };
        console.log(props.persons)
        props.setPersons(props.persons.concat(personObject));
        setNewPerson("");
      };
      const handleName = (event) => {
        setNewPerson({ ...newPerson, name: event.target.value });
      };
      
      const handleNumber = (event) => {
        setNewPerson({ ...newPerson, number: event.target.value });
      };
      
  return (
    <div>   
   <form onSubmit={addPerson}>
    <p>Name: </p>
    <input
      value={newPerson.name}
      onChange={handleName}
      placeholder="ex: julia"
    /> 
    <p>Number: </p>
    <input
    value={newPerson.number}
    onChange={handleNumber}
    placeholder="ex: 6969"
  />
    <button type="submit">save</button>
  </form>
  </div>
  )
}

export default PersonFrom