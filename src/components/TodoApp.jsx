import React , {useState}from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

import TodoList from './TodoList'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const addTodo = (newTodo) =>{
     setTodos([...todos, newTodo])
    
  }
  
    return (
    <div>
        TodoApp
        <TodoInput addTodo={addTodo}/>
        
        <TodoList >
          
         
        <div>
        {
              todos.map(function(todo){
              
             return (
                   <TodoItem todoValue={todo}/>
               )
           }) 
         }
        </div>
       </TodoList>
        </div>
  )
}

export default TodoApp