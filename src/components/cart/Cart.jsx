import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext)
        console.log(cart)
    return (
        <div>Carrito</div>
    )
}

export default Cart