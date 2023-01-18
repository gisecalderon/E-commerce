
import {useState} from "react"

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState( initial )
    
    const increment = () => {
        if (counter < stock) {
            setCounter( counter +1)
        }
    }

    const decrement = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    const onAdd = ( quantity ) => {
        console.log ("la cantidad es:",quantity)
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd (counter)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount