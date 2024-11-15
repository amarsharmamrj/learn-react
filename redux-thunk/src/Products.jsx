import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getProducts } from "./redux/action"

const Products = () => {
    const [dataLoaded, setDataLoaded] = useState(true)

    const dispatch = useDispatch()

    const products = useSelector(store => store.productReducer)
    console.log('@@ products:', products)

    const handleGetProducts = () => {
        setDataLoaded(false)
        dispatch(getProducts())
        setDataLoaded(true)
    }

    return (
        <div className="product-page">
            <button type="button" onClick={handleGetProducts}>Get Products</button>
            <div className="products">
                {
                    dataLoaded ? (
                        products.length > 0 && (
                            products.map((product) => (
                                <img src={product.image} alt={product.title} />
                            ))
                        )
                    ) : ('Loading..')
                }
            </div>
        </div>
    )
}

export default Products