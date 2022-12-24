

const ProductsCard = () => {
    return (
    <div> 
        <h2>{element.name}</h2>
        <img src={element.img} />
        <h3>${element.precio}</h3>
    </div>);
}

export default ProductsCard