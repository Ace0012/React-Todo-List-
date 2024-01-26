import React, { useState } from 'react'
import Item from './Item'

const Todo = () => {
const storedValue = JSON.parse(localStorage.getItem("todos")) || [];

    const[todos,setTodos] = useState(storedValue) ;
    const[newTodo,setNewtodo] = useState("");
  
    console.log(newTodo)
    console.log(todos)


    const addTodo = ()=>{
        const storing = [...todos,newTodo];

        if(newTodo !== ""){
            setTodos(storing)
          localStorage.setItem("todos", JSON.stringify(storing));
            setNewtodo("")


        }
    }

    const removeItem = (index)=>{
        const updateList = [...todos];
updateList.splice(index,1)
setTodos(updateList)
localStorage.setItem("todos",JSON.stringify(updateList))
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

      <Item data = {todos} removeitem = {removeItem}/>
    
    </div>
  )
}

export default Todo
