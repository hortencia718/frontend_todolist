import React, {useState} from 'react'
import TodoForm from './TodoForm'
import CategoryContainer from './CategoryContainer'
import { Divider } from 'semantic-ui-react';

function TodoList(props) {
    // todos is the state value itself, and setTodos is the function that updates the state value.
    const [todos, setTodos] = useState(['']);
    let newList = todos.map(todo => {
        
        // console.log(todo) 
//    r/t the unordered list of the todos
   return <ul>
            <li> 
              {todo}
                 </li>
                 </ul>
   
    })  
    
    return (<div> 
        <ul>
           {newList}
        </ul>
    </div>)
      
}

export default TodoList


// when open this is the right file 