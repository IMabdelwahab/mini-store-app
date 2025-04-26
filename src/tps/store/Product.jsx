export default function Product(props) {
    
    return (
        <>
        <div className="grid grid-cols-12 gap-20 my-5">
            <div className="text-center">{props.product.id}</div>
            <div className="col-span-3">{props.product.title}</div>
            <div className="text-center">{props.product.price}</div>
            <div className="col-span-3 truncate">{props.product.description}</div>
            <div className="text-center">{props.product.category}</div>
            <img className="col-span-2" width={250} src={props.product.image}></img>
            <div className="text-center"><small>{props.product.rating.rate}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
            </svg>
            </small></div>
        </div>
        <hr />
        </>
        
    )
}