import { useEffect, useState } from "react"
import Product from "./Product"
import Search from "./Search"

export default function ProductList(){

    useEffect(()=>{
        getPoducts()
        getCategories()
    },[])

    
    
    const [productList, setPoductList] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [searchValue , setSearchValue] = useState("")

    const getPoducts = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(response => setPoductList(response))

    }
    const getCategories = ()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(response => setCategories(response))

    }

    const displayProducts =  () => {
        let tmpProducts = productList
        if (category !== ""){
            tmpProducts = productList.filter((e)=>{
                return e.category === category
            })
        }

        if (searchValue !== ""){
            tmpProducts = tmpProducts.filter((e)=>{
                return e.title.toLowerCase().includes(searchValue.toLowerCase())
            })
        }

        if (tmpProducts.length > 0){
            return tmpProducts.map((product,key) => { 
                return <Product key={key} product={product}/>
            })
        }
        else{
            return <div className="my-5 col-span-12 text-center text-xl text-red-800">No Items Found !</div>
        }
    }

    const displayCategories = () =>{
        return categories.map((categorie,key)=>{ return <button key={key} onClick={()=>setCategory(categorie)} id="btn-cat" className="my-5 p-3 text-white rounded bg-gray-400 hover:bg-gray-600">{categorie}</button> })
    }

    const hundleSearch = (e) =>{
        e.preventDefault()   
        // setSearchValue(document.querySelector("#searchField").value)     
    }

    // const categorieChange = (categoryT) =>{
    //     setCategory(categoryT)
    // }

    return (
        <div className="mx-auto w-10/12">
        <form action="">
            <div>
                <label htmlFor="">Search : </label>
                <input onChange={()=>{ setSearchValue(document.querySelector("#searchField").value) }} type="text" id="searchField" className="mx-2 px-2 border-solid border-2 border-sky-500 rounded-md" />
                <button type="submit" onClick={hundleSearch} className="mx-5 bg-sky-500 px-5 py-1 text-red-50 rounded-md hover:bg-sky-800">Search</button>
            </div>
        </form>
        <div className="grid grid-cols-5 gap-1">
            {displayCategories()}
            <button onClick={()=>setCategory("")} id="btn-cat" className="my-5 p-3 text-white rounded bg-gray-400 hover:bg-gray-600">Reset</button>
        </div>
        <h1 className="text-3xl my-10">Product List</h1>
        <div className="grid grid-cols-12 gap-20 my-10">
            <div className="text-center">ID</div>
            <div className="col-span-3 text-center">Title</div>
            <div className="text-center">Price</div>
            <div className="col-span-3 text-center">Description</div>
            <div className="text-center">Categorie</div>
            <div className="col-span-2 text-center">Image</div>
            <div className="text-center">Rating</div>
        </div>
        <hr />
        {displayProducts()}
        </div>
    )
}