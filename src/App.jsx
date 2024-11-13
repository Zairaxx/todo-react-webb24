import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User';

function App() {
  let [userId, setUserId] = useState(null); //Sparat id från vår dropdown
  let [user, setUser] = useState(null); //Sparad användare från "Get user by ID"

  //Funktion för när vi klickar på "Get user by ID"-knappen
  const getUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    let json = await response.json();
    console.log(json);
    setUser(json);
  }

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
      {/* När vi klickar, så hämtar vi användare med valt id och sparar i vårt user-state - se getUser-funktion ovan*/}
      <button onClick={getUser}>Get user ID</button>
      {/*Om det finns en hämtad användare i state - Rendera ut en <User/>-komponent med användarens info*/}
      {user && <User data={user}/>}

    </>
  )
}

export default App
