import { useEffect, useState } from "react"

function SmallComponent(){

    let [count,setCount] = useState(0)

    useEffect(() => {
        console.log("Component mounting..");

        return () => {console.log("Component is unmounting...")}
    }, [])

    useEffect(() => {
        if(count !== 0){
            console.log("Component updating.. ")
        }
    }, [count])

    return <>
    <h2>Hello!</h2>
    <button onClick={() => setCount(count+1)}>{count}</button>
    </>
}

export default SmallComponent