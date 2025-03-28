import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

const fetchProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products') 
        return await res.json() 
    } catch (error) {
        throw error
    }
}

const Products = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        staleTime: 50000,
        // refetchInterval: 1000,
    })

    if (isLoading) {
        return <h1>Loading..</h1>
    }

    if (isError) {
        return <h2>Something went wrong!</h2>
    }

    return (
        <div className="products">
            {
                data?.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <Link to={`product/${product.id}`}>
                                <img src={product.image} alt={product.title} />
                                <p>{product.title}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
