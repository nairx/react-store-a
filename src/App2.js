import { useState } from "react"
export default function App2(){
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    )
}