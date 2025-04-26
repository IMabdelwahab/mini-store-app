export default function Textfield(props){
    return (
        <>
            <label>{props.inputLabel}: </label>
            <input className="border-green-400 border-solid text-red-800" type="text" name = {props.inputName} />
            <h1>{props.children}</h1>
        </>
        
    )
} 