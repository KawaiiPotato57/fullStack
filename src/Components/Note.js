const Note = ({ note, toggleImportance,deleteThis }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button> 
      <button onClick={deleteThis }>Delete</button>

    </li>
  )
}
  
  export default Note