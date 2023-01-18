import React, { useState, useEffect } from 'react';

import { products } from "../../productsTienda";
import ItemList from "../itemList/ItemList";
import ItemCount from "../itemCount/ItemCount";
import {useParams} from "react-router-dom"

const itemListContainer = ( {} ) => {

  const {categoryName} = useParams()
  console.log (categoryName)

  const [ items, setItems] = useState([])
  const [posts, setPosts] = useState([])

  const onAdd = ()=>{
    console.log("Bienvenidos")
  }

  useEffect(()=>{
    
    const productosfiltered = products.filter( productos => productos.category === categoryName)

    const task = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosfiltered : products)
      },500)
    })
    task
    .then((res)=> { 
      setItems(res)
    })
    .catch((err) => {
      console.log("no se puede")
    })
    
    console.log("realizado")
  },[categoryName])

  useEffect( ()=>{
    const getPost = fetch("https://jsonplaceholder.typicode.com/posts")
    getPost
    .then( (res)=> res.json() )
    .then( (res)=> setPosts(res)) 
  } ,[] )

  console.log(posts)

  return (
    <div>
      <ItemCount initial={0} stock ={4}/>
      <ItemList items={items} />
    </div>
  )
} 

export default itemListContainer