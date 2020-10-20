import React, {useState, useEffect}from 'react';
import './App.css';
// importing components 
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



 function App () {
  
  let [tasks, setTasks] = useState ([])
  let [categories, setCategories] = useState ([])
  let [list, setList] = useState ("")
  let [user, setUser] = useState ("hortencia")
  // console.log(categories);
  
  

  useEffect( () => {
    fetch("http://localhost:3000/categories")
   .then (res => res.json())
   .then ((arrayOfCatergories) => {
     setCategories(arrayOfCatergories)
   })
  }, [])
  

  
  // console.log("this is categories:", categories)
   return (
    //  console.log("this is categories:", categories)
    <div className=" todo-list App">

      <header className="App-header">
        <h1>Todo list</h1>
        <TodoForm categories={categories}/>
        <TodoList task ={tasks}/>
        {/* <List /> */}
      
      </header>
    </div>
   );
  
}

export default App;
