
import { Link } from "react-router-dom";

function Product(props){
    const {product, showButton} = props;
    return (
        <>
            {console.log("showButton value:", showButton)}

            <div className="card" style={{ width: "auto",  maxHeight: "100%" }}>
                <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body"> 
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p> Price: {product.price}$</p>
                    {showButton &&(
                        <Link className="btn btn-primary" to={`/product/${product.id}`} >Details</Link>

                    )}
                </div>
            </div>
        </>
    )
}

export default Product;