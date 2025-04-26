import { useState } from "react";

export default function Fruites(props){
    // var fruits = ["lbanan","lmawz","moska banan","dela7"]
    // const fruits = props.fruits;
    
    const [fruit,setFruit] = useState()
    const [fruits,setfruits] = useState([])

    const  displayFruits = () => fruits.map((fruit,key) => { return <li className="underline" key={key}>{fruit}</li>}) // { return }

    const hundleInput = () =>{
        setFruit(document.querySelector('#fruit').value)
    }
    const hundleAdd = (e) =>{
        e.preventDefault()
        setfruits([...fruits,fruit])
        console.log(fruits);
    }
    
    return (
        <>
            <form> 
                <input onChange={hundleInput} type="text" id="fruit" />
                <button onClick={hundleAdd} type="submit">Add</button>
            </form>
            <h2 className="font-bold">Fruites: </h2>
            <ul>
                {displayFruits()}
            </ul>
        </>
    )
}