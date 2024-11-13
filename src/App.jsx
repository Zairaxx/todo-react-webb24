import { useEffect, useState } from 'react'
import SmallComponent from './components/SmallComponent';
import './App.css'
import User from './components/User';

function App() {
  let [show,setShow] = useState(false);
  let [users,setUsers] = useState([]);
  let [userId, setUserId] = useState(null);
  let [user, setUser] = useState(null);

  const getUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    let json = await response.json();
    console.log(json);
    setUser(json);
  }

  useEffect(() => {

    let getData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
      let json = await response.json();
      console.log(json);
      setUsers(json);
    }
    getData();
  }, [])



  return (
    <>

    <select onChange={(event)=>{ setUserId(event.target.value)}}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <button onClick={getUser}>Get user ID</button>

    {user && <User data={user}/>}


    {show && <SmallComponent/>}
    <h1>Component Lifecycle - useEffect</h1>
    <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  )
}

export default App
