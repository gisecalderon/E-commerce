import { Link } from "react-router-dom";

const Item = ({element}) => {
    return (
        <div>
            <h2>{element.name}</h2>
            <img src={element.img} alt="" />
            <h3>${element.price}</h3>
            <Link to={'/ItemDetail/${element.id}'} >Ver más detalles </Link>
        </div>
    );
};

export default Item;