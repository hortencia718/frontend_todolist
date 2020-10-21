import React, {useState} from 'react'
import TodoForm from './TodoForm'


function TodoList(props) {
    // todos is the state value itself, and setTodos is the function that updates the state value.
    const [todos, setTodos] = React.useState([]);
// console.log(props)
    
    return (
        <div>
            <h3></h3>
            {/* i uncommented this out */}
            {/* <TodoForm /> */}
        </div>
    )
}

export default TodoList


