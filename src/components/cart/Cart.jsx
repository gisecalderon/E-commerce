import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const {cart, clearCart} = useContext(CartContext)
    
    return (
        <div>{cart.map( item=>(
            <div key ={item.id}>
                <h2>{item.name}</h2>
                <h2>{item.precio}</h2>
                <h2>{item.quantity} unidade  s</h2>
            </div>
        ))}
            <div>
                <button onClick={()=>clearCart()}>Vaciar carrito</button>
            </div>
        </div>
    )     
}

export default Cart