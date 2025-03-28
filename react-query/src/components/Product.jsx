import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

const Product = () => {
    // const {title, desc} = props.product 

    const params = useParams()

    const fetchProduct = async () => { 
        try {
            let res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            return await res.json()
        } catch (error) {
            throw error
        }
    }

    const { data, isLoading } = useQuery({
        queryKey: ['product', params.id],
        queryFn: fetchProduct,
        staleTime: 50000
    })

    if(isLoading){
        return <p>Loading..</p>
    }

    return (
        <div className="product-item">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default Product
