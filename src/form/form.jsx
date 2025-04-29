import { useState } from "react"

export default function Form(){

    // const [username,setUsername] = useState()
    // const [password,setpassword] = useState()
    const [data,setData] = useState({}) 
    const nameInput = document.getElementById('name')
    
    const hundleInputCange = (e) => {
        let id = e.target.id
        let value = e.target.value
        setData({
            ...data,
            [id]: value
        })
        console.log(data)
    }

    const hundleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }
    return(
        <div className="mx-auto my-10 shadow-md shadow-green-800 shadow rounded w-1/2 justify-items-center">
            <h1 className="text-4xl text-green-700 my-5">Log In</h1>
            <form action="post" className="grid grid-cols-1 w-full">
                <input onChange={(e)=>hundleInputCange(e)} type="text" id="username" className="mx-5 p-5 mb-5 focus:{border-green-600} border-solid border-2 border-green-400" placeholder="Username"/>
                <input onChange={(e)=>hundleInputCange(e)} type="password" id="password" className="mx-5 p-5 mb-5 focus:{border-green-600} border-solid border-2 border-green-400" placeholder="Password"/><br />
                <button type="submit" onClick={(e)=>hundleSubmit(e)} className="bg-green-800 rounded m-auto p-3 mb-5 text-white w-fit ">Submit</button>
            </form>
        </div>    
    )
}