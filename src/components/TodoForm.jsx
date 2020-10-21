//    import { render } from '@testing-library/react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import TodoList from './TodoList';


    function TodoForm(props){
         console.log("this is props:", props)
         const[input, setInput] = React.useState('');

        let handleChange = evt => {
            setInput(evt.target.value)
        }

       let handleSubmit = evt => {
            evt.preventDefault(); 

            // setInput("");
        };


        console.log(props.categories)
            let categoryArray = props.categories.map(cat =>{
          
            return < TodoList category={cat.name}/>
               
          })
    
        // let categoryArray=props.categories.map((singleCategory)=>{
        //     return <TodoList    key={singleCategory.name}
        //                       name={singleCategory.name} />        
        //     })

    
    //  todos is the state value itself, 
    // and setTodos is the function that updates the state value.

       
        return (
              
            <form className='todo-form' onSubmit={handleSubmit}>
            <input
            // type='text'
            placeholder='need to do... '
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            />
            <button className= "todo-button" type="submit">Category</button>
            {/* <button className= "todo-button" type="submit">add</button> */}
            <div className="category">
            {categoryArray}
               {/* hola people of earth */}
            </div>
         
            </form>
        );
    }
   

    export default TodoForm