import { useState } from "react"

export default function Search(props){
    const [searchValue , setSearchValue] = useState()
    const hundleSearch = (e) =>{
        e.preventDefault()
        console.log(searchValue);
        
    }

    return (
        <>
        <form action="">
            <div>
                <label htmlFor="">Search : </label>
                <input onChange={()=>{
                    setSearchValue(document.querySelector("#searchField").value)
                }} type="text" id="searchField" className="mx-2 border-solid border-2 border-sky-500 rounded-md" />
                <button type="submit" onClick={hundleSearch} className="mx-5 bg-sky-500 px-5 py-1 text-red-50 rounded-md hover:bg-sky-800">Search</button>
            </div>
        </form>
        </>
    )
}