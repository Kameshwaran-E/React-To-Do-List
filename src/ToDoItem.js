import React from 'react'

const ToDoItem = ({itemText,deleteItem}) => {
  return (
    <div className='todoitem'>
    <p>{itemText}</p>
      <button onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default ToDoItem