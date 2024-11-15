import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../redux/actions/products'
import Product from "./Product"

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((store) => store.products)
    console.log("products:", products)

    const handleGetProducts = () => {
        dispatch(getAllProducts())
    }

    useEffect(() => {
        const url = 'https://swapi.dev/api/people'

        fetch(url)
        .then((res)=>res.json())
        .then((result) => {
            console.log("result:", result)
        })
        .catch((err) => console.log("err:", err))
       
    }, []);

    return (
        <>
            <p>Products</p>
            <button onClick={handleGetProducts}>Get Products</button>

            <div className="products">
                {
                    products.length > 0 ? (
                        products.map((product) => {
                            return (
                                <Product product={product} />
                            )
                        })
                    ) : (<p>Loading..</p>)
                }
            </div>
        </>
    )
}

export default Products