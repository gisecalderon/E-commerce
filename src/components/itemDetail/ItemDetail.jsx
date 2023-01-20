import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({product}) => {

    const {addToCart} = useContext(CartContext)

    const onAdd = (quantity) => {
        addToCart({...product, quantity:quantity})
    }
    return (
        <div>
            <div>    
                <h2>{product.img}</h2>
                <h2>{product.name}</h2>
                <h2>{product.precio}</h2>
                <h2>{product.descripcion}</h2>
            </div>
            <ItemCount onAdd={onAdd} stock={product.stock}/>
        </div>
    )
}

export default ItemDetail