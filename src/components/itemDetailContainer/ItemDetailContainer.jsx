import React, { useEffect, useState } from 'react'
import {products} from '../../productsTienda'
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  
  const {id} = useParams ()
  console.log (id)
  useEffect( ()=>{
    const productSelected = products.find( producto => producto.id === +id )
    setProduct(productSelected)
  },[id])

console.log(product)

  return (
    <div>Item Detail Container</div>
  )
}

export default ItemDetailContainer