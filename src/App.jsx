import { useState } from 'react'

import './App.css'

function App() {

  let [todos,setTodos] = useState([
    {
        title:"Todo #1",
        desc:"Städa",
        completed:false
    },
    {
      title:"Todo #2",
      desc:"Städa",
      completed:false
  },
  {
    title:"Todo #3",
    desc:"Städa",
    completed:true
},
{
  title:"Todo #4",
  desc:"Städa",
  completed:false
},
{
  title:"Todo #5",
  desc:"Städa",
  completed:true
}
  ])
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('')

  const addTodo = () => {
    
    let newTodo = {
      title:title,
      desc:description,
      completed:false
    }

    let updatedTodos = [...todos, newTodo]
    // updatedTodos.push(newTodo)
    setTodos(updatedTodos)

  } 

  const deleteTodo = (index) => {
    //Få bort den klickade todon från listan.
    
    let updatedTodos = todos.filter((todo,i) => {return i !== index})
    setTodos(updatedTodos);
  }

  const completeTodo = (index) => {

    let updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  }

  return (
    <>
    <h1>Todo app in React</h1>
    <input type="text" placeholder="Titel" onChange={(event) => setTitle(event.target.value)}/>
    <input type="text" placeholder="Beskrivning" onChange={(event) => setDescription(event.target.value)}/>
    <button onClick={addTodo}>Lägg till</button>
    {/* Todo list */}
    <ul>
      {todos.map((todo,i) => <li key={i}>
        <h2 className={todo.completed ? 'completed' : ""}>{todo.title}
          <button onClick={() => deleteTodo(i)}>X</button>
          <button onClick={() => completeTodo(i)}>Complete</button>
        </h2>
        <p>{!todo.completed && todo.desc}</p>
        </li>)}
    </ul>
    </>
  )
}

export default App
