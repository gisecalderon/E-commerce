import React, { useEffect } from 'react'
import Counter from '../counter/Counter'
import { products } from "../productsTienda"

const itemListContainer = ( {greeting} ) => {
  
  console.log(saludo1)
  console.log(saludo2)

  const [ items, setItems] = useState([])

  const onAdd = ()=>{
    console.log("hola")
  }

  useEffect(()=>{
    
    const task = new Promise ((resolve, reject)=>{
      setTimeout(() =>{resolve(products)},5000);
      
  })
    task
    .then((res)=>{ setItems( res )})
    .catch((err) => {console.log("no se puede")})
    console.log("realizado")
  },
  []);

  console.log(items)

  return (
    <div>
      <h2>{greeting}</h2>
      <Counter stock={5} initial={1} onAdd={onAdd}/>
      {
        items.map((element, indice)=>{
          return( 
            <div key={element.name}> 
              <h2>{element.name}</h2>
              <img src={element.img} />
              <h3>${element.precio}</h3>
            </div>);
        })
      }
    </div>
  );
};

export default itemListContainer;


