import { useEffect, useState } from "react"

let User = ({data}) => {
    let [todos,setTodos] = useState([]);

    useEffect(() => {
        let getTodos = async () => {
            let response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=" + data.id)
            let json = await response.json();
            setTodos(json);
        }
        getTodos();
    },[])



    return(<div>
        <h2>Name :{data.name}</h2>
        <h3>Todos</h3>
        <ul>
            {todos.map(todo => <li>{todo}</li> )}
        </ul>

    </div>)
}

export default User