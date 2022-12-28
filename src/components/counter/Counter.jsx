import React, { useState } from 'react'
import {useState} from "react"

    const [counter, setCounter] = useState( initial )
    
    const [] = useState(0)
    return (
        <div>
            <h2>{counter}</h2>
            <CustomButtom texto={"Cantidad"} counter={counter} setCounter={setCounter}/>
            <button>+</button>
            <button>-</button>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Counter