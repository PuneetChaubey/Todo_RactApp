import React from 'react'

const TodoList = ({todos,children}) => {
    
  return (
     <div>
          <h3>Here is Your Todo List</h3>
          {children}
     </div>
     
  )
}

export default TodoList