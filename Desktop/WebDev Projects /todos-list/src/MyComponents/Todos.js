import React from 'react'
import TodoItem from './TodoItem';


const Todos = (props) => {
      let myStyle = {
          minHeight: "70vh",
          marginBottom:"50px"
      }
    return (
        <div className="container" style={{myStyle}}>
            <h3 className="text-center mt-3">To-Do's List</h3>
            {props.todos.length===0? "No Todos to Display":
            props.todos.map((todo)=>(
                <TodoItem todo = {todo} key = {todo.sno} onDelete={props.onDelete}/>
            ))
            }
        </div>
    )
}

export default Todos;
