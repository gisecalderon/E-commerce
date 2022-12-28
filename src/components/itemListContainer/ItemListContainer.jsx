import React, { useState, useEffect } from 'react';

import { products } from "../itemList/productsTienda";
import ItemList from "../itemList/ItemList";
import ItemCount from "../itemCount/ItemCount";

const itemListContainer = ( {} ) => {

  const [ items, setItems] = useState([])

  const onAdd = ()=>{
    console.log("Bienvenidos")
  }

  useEffect(()=>{
    
    const task = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      },5000)
    })
    task
    .then((res)=> { 
      setItems( res )
    })
    .catch((err) => {
      console.log("no se puede")
    })
    
    console.log("realizado")
  },[])

  return (
    <div>
      <ItemCount initial={0} stock ={4}/>
          <ItemList items={items} />
    </div>
  )
} 

export default itemListContainer