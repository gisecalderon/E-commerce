import {createContext, useState} from "react"
export const CartContext = createContext()

import React from 'react'

const CartContextProvider = (children) => {
    const[cart, setCart]= useState([])
    
    const data = {
        cart,
        setCart
    }
    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider