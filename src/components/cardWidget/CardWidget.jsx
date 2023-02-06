import { useContext } from "react"
import "./CardWidget.css";
import {AiOutlineShoppingCart} from "react-icons/ai"
import{Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext";


export const CardWidget = () => {
    const {cart} = useContext(CartContext)

    return (
        <div className="container-carrito">
            <Link to="/cart" >   
                <AiOutlineShoppingCart color={"white"}/> 
                <div>
                    <span>{cart.length}</span>
                </div>
            </Link>
        </div> 
)
}
