import React, {useState, useEffect}from 'react';
import './App.css';
// importing components 
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CategoryContainer from './components/CategoryContainer'

//note for myself here change to class?
// class App extends React.Component{
  // state ={
  // categories: []
  // }
// }

  function App () {
  //  let arrayOfCatergories= useState([])
  let [categories, setCategories] = useState ([])
     console.log(categories)
  
  let [tasks, setTasks] = useState ([])
  // let [categories, setCategories] = useState ([])
  let [list, setList] = useState ("")
  let [user, setUser] = useState ("hortencia")
  let [loading, setLoading] = useState (true)

  
// test
  // let handleClick =(evt) => {
  //   setCategories([{
  //     categoryName: "chicken",
  //     shopping: [],
  //     bought: 4
  //   }])
  // }
  
//  ComponentDidMount () => {}
  useEffect( () => {
    fetch("http://localhost:3000/categories")
   .then (res => res.json())
   .then ((arrayOfCatergories) => {
     setCategories(arrayOfCatergories) 
     setLoading(false)
   })
  }, [])
  

  
  // console.log("this is categories:", categories)
   return (
   
    <div className=" todo-list App">

      <header className="App-header">
        <h1>Todo list</h1>
        <TodoForm categories={categories}/>
     
       < CategoryContainer categories= {categories}/>
        {/* <TodoList tasks ={tasks} loading ={loading} categories={categories}/> */}
        
       <h1>hola</h1>
       
      </header>
    </div>
   );
  
}

export default App;
