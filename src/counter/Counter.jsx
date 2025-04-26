import { useEffect, useState } from "react"

export default function Counter(){
    const [count , setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(prev =>{
                return prev+1
            })
        },1000)
    },[])

    return (
        <>
        <button onClick={()=>{ setCount(prev=>{ return prev+1 })} } className="border-2 p-2 border-solid border-green-700 ">increment</button>
        <button onClick={()=> setCount(0) } className="border-2 p-2 border-solid border-green-700 ">reset</button>
        <p>counter : {count} seconds</p>
        </>
    )
}