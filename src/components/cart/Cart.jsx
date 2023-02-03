import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const {cart, clearCart, getTotalPrecio} = useContext(CartContext)
    
    if (cart.length<1){
        return <h2>No hay productos en el carrito</h2>
    }

    return (
        <div>{cart.map((item)=>(
            <div key ={item.id} item={item}>
                <h2>Producto:{item.name}</h2>
                <h2>Precio Total:{ getTotalPrecio() }</h2>
                <h2>Unidades:{item.quantity}</h2>
            </div>
        ))} 
            <div>
                <button variant ="contained">Comprar</button>
                <button onClick={()=>clearCart()} variant="contained">Vaciar carrito</button>
            </div>
        </div>
    )     
}

export default Cart