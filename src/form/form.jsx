import { useState } from "react"

export default function Form(){

    const [name,setName] = useState()
    const [age,setAge] = useState(18)
    const nameInput = document.getElementById('name')
    const hundleNameInput= () =>{
        setName(document.getElementById('name').value)
    }
    const hundleAgeInput= () =>{
        setAge(document.getElementById('age').value)
    }
    const hundleSubmit= (e) =>{
        e.preventDefault()
        console.log(name + " -- "+ age)
    }

    return(
        <div>
            <form action="post">
                <input onChange={hundleNameInput} type="text" id="name" placeholder="name"/>
                <input onChange={hundleAgeInput} type="number" id="age" placeholder="age"/><br />
                <button type="submit" onClick={hundleSubmit}>Submit</button>
            </form>
        </div>    
    )
}