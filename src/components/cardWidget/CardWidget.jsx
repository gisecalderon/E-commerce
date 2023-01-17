import "./cardWidget.css";
import {AiOutlineShoppingCart} from "react-icons/Ai"
import{Link} from "react-router-dom"

export const cardWidget = () => {
    return (
        <Link to="/cart" >   
            <div className="container-carrito">
                <AiOutlineShoppingCart color={"white"}/> 
            </div> 
        </Link>
)
}
