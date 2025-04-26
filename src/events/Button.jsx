export default function Button(){
    const hundleClick = () =>{
        alert("Clicked")
    }
    return (
        <>
        <button onClick={hundleClick} className="border-2 p-2 border-solid border-green-700 ">Click Here !</button>
        </>
    )
}