import React from "react";
import Item from "../item/Item";


const ItemList = ({items}) => {
    return (
    <div id="container-cards"> 
        {items.map((element) => {
            return <Item key={element.name} element={element} />
        })};
        </div>
    )
}

export default ItemList