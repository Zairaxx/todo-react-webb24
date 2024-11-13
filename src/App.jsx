import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User';

function App() {
  let [show,setShow] = useState(false);
  // let [users,setUsers] = useState([]);
  let [userId, setUserId] = useState(null);
  let [user, setUser] = useState(null);

  const getUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    let json = await response.json();
    console.log(json);
    setUser(json);
  }

  //Kod för att hämta ALLA users när applikationen startas 

  // useEffect(() => {

  //   let getData = async () => {
  //     let response = await fetch("https://jsonplaceholder.typicode.com/users")
  //     let json = await response.json();
  //     console.log(json);
  //     setUsers(json);
  //   }
  //   getData();
  // }, [])



  return (
    <>
    <h1>React with API & useEffect</h1>
      {/* Vi sparar ett valt id för en användare. */}
      <select onChange={(event)=>{ setUserId(event.target.value)}}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <button onClick={getUser}>Get user ID</button>

      {user && <User data={user}/>}


      
    </>
  )
}

export default App
