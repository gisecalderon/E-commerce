import { useState } from "react"
const CustomButtom = ( {texto, counter, serCounter})=>{
    const sumar = ()=>{
        setCounter (counter +1)
    }

    return (
        <>
            <button onClick={sumar}>{texto}</button>
            {/*<h2>{counter}</h2>*/}
        </>
    );
};

export default CustomButtom;