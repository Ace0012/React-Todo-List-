import React, { useState } from 'react'
import Item from './Item'

const Todo = () => {
    const[todos,setTodos] = useState([]);
    const[newTodo,setNewtodo] = useState("");
    console.log(newTodo)
    console.log(todos)

    const addTodo = ()=>{
        if(newTodo !== ""){
            setTodos([...todos,newTodo])
            setNewtodo("")
        }
    }

  return (
    <div>

      <h1>
My Todo List 
        
      </h1>
      <br />
      <br />
      <br />
      <input
      type="text" 
      value={newTodo}
      onChange={(e)=>setNewtodo(e.target.value)}
      />
      <button onClick={addTodo}>
        Add 
      </button>
      <Item/>
    </div>
  )
}

export default Todo
