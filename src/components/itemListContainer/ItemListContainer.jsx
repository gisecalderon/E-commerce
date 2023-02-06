import React, { useState, useEffect } from 'react';

import { products } from "../../productsTienda";
import ItemList from "../itemList/ItemList";
import ItemCount from "../itemCount/ItemCount";
import {useParams} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import {getDocs, collection} from "firebase/firestore";
import { db } from '../../firebaseConfig';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

const itemListContainer = ( {} ) => {

  const {categoryName} = useParams()

  const [ items, setItems] = useState([])
  const [posts, setPosts] = useState([])

  const onAdd = ()=>{
    console.log("Bienvenidos")
  }

  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
 // useEffect( ()=>{
 //   const getPost = fetch("https://jsonplaceholder.typicode.com/posts")
 //   getPost
 //   .then( (res)=> res.json() )
 //   .then( (res)=> setPosts(res)) 
 // } ,[] )

 // console.log(posts)

const itemCollection = collection ( db, "products" )

if (categoryName){
  else{

  }


getDocs(itemCollection)
.then( (res)=>{
  const products = res.docs.map( product =>{
    return{
      ...product.data(),
      id: product.id
    }
  })
  setItems(products)
} )

.catch( (err)=> console.log(err))
}
  setTimeout (()=>  {
    setIsLoading(false)
  },1000)
  }, [categoryName]);

  return (
    <div>
      {
        isLoading ? <ClipLoader
        color={"grey"} 
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : <ItemList items={items} />
      }

    </div>
  )
} 

export default itemListContainer