import React, {useState} from 'react'
import TodoForm from './TodoForm'


function TodoList(props) {
    const [todos, setTodos] =useState([]);
console.log(props)
    
    return (
        <div>
            <h3></h3>
            <TodoForm />
        </div>
    )
}

export default TodoList


