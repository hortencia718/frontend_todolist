import React, {useState, useEffect}from 'react';
import './App.css';
// importing components 
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CategoryContainer from './components/CategoryContainer'
import { Select } from 'semantic-ui-react'
//note for myself here change to class?
// class App extends React.Component{
  // state ={
  // categories: []
  // }
// }

  function App () {
  //  let arrayOfCatergories= useState([])
  let [categories, setCategories] = useState ([])
    //  console.log(categories)
  
  let [tasks, setTasks] = useState ([])
  // let [categories, setCategories] = useState ([])
  let [list, setList] = useState ("")
  let [user, setUser] = useState ("hortencia")
  let [loading, setLoading] = useState (true)

  

  

  useEffect( () => {
    fetch("http://localhost:3000/categories")
      .then (res => res.json())
      .then ((arrayOfCatergories) => {
      setCategories(arrayOfCatergories) 
      setLoading(false)
   })
  }, [])


  
    let handleSubmit = (input,dropdown)  => {
    //  debugger
    
       fetch("http://localhost:3000/tasks",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
          body: JSON.stringify({
           list_id: 4, 
           category_id: dropdown,
           name:input

          })
        })
          .then(res=> console.log(res))
    
    
   }
      
 


    //  let handleChange = evt => {
    //     setInput(evt.target.value);
    //   console.log("hello")
    // };      




   return (
   
       <div className=" todo-list App">

        <header className="header">
        <h1 className="todolistmainname">Todo List</h1>
        <TodoForm categories={categories}  handleSubmit ={ handleSubmit}/>
     
       {/* < CategoryContainer categories= {categories}/> */}
        <TodoList/>
        
       <h1></h1>
       
      </header>
    </div>
   );
  
}

export default App;
