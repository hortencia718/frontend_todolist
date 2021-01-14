//    import { render } from '@testing-library/react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import TodoList from './TodoList';
import { Select } from 'semantic-ui-react'



// const CategoryOptions = [ { key: 'shopping ', value: 'shooping', text: shopping' },
// { key: 'bz', value: 'bz', text: 'Belize' },
// { key: 'bj', value: 'bj', text: 'Benin' },
// ]]
// const SelectExample = () => (
//     <Select placeholder='Select your country' options={countryOptions} />
//   )



    function TodoForm(props){
        //  console.log("this is props:", props)
         const[input, setInput] = React.useState('');

         const[dropdown, setDropdown ] = useState(0)
         
            // handle the change
        let handleInputChange = (evt) => {
            // debugger
            setInput(evt.target.value)
           
        }
            // handle the dropdown menu
            let handleDropdownChange = ( evt,dropdown) => {
                setDropdown(dropdown.value)
            }
                // submit the change
            let handleSubmit =(evt) =>{
                evt.preventDefault()
                props.handleSubmit(input, dropdown)
            }


        // console.log(props.categories)
            let categoryOptions = props.categories.map(cat =>{
          
            return {
                key: cat.id,
                text: cat.name,
                value: cat.id
            }
               
          })
    
       
    
    //  todos is the state value itself, 
    // and setTodos is the function that updates the state value.
            console.log(props.categories)

       


        return (
            //   drop down form 
            <form 
            className='todo-form' onSubmit={handleSubmit}>
                <Select placeholder='Select your category' options={categoryOptions} onChange={handleDropdownChange} />

              <br/>
              <br/>
              <br/>
              
            <input
            // type='text'
           
            placeholder='..... '
            value={input}
            name='text'
            className='todo-input'
            onChange={handleInputChange}
            />
            <button className= "todo-button" 
            
            type="submit">Add Task </button>
            {/* <button className= "todo-button" type="submit">add</button> */}
           <div className="rcorners-box">
       
             </div>
            <div className="container">
             
            </div>
           
            </form>
        );
    }
   

    export default TodoForm;