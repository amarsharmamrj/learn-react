const Product = (props) => {
    const { id, title, thumbnail: image } = props.product
    return (
        <div className="product">
            <p>{title}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Product