const Recipe = (props) => {
    const { name, image } = props.recipe
    return (
        <div className="recipe">
            <p>{name}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe