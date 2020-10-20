//    import { render } from '@testing-library/react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import TodoList from './TodoList';


    function TodoForm(props){
         console.log("this is props:", props)
         const[input, setInput] = useState('');

        let handleChange = evt => {
            setInput(evt.target.value)
        }

       let handleSubmit = evt => {
            evt.preventDefault(); 
        };
        // console.log(props.categories)
        //     let categoryArray = props.categories.map(cat =>{
          
        //     return < TodoList category={cat.name}/>
               
        //   })
    
        let categoryArray=props.categories.map((singleCategory)=>{
            return <TodoList    key={singleCategory.name}
                              name={singleCategory.name} />
                              
                        
            })

       
        return (
              
            <form className='todo-form' onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder=' '
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            />
            <button className= "todo-button" type="submit">Category</button>
            {/* <button className= "todo-button" type="submit">add</button> */}
            <div className="category">
            {/* {categoryArray} */}
               hello
            </div>
           
            </form>
        );
    }
   

    export default TodoForm