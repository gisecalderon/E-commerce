import {useContext} from 'react'

const Cart = () => {

    const {cart} = useContext()
        console.log(cart)
    return (
        <div>Carrito</div>
    )
}

export default Cart