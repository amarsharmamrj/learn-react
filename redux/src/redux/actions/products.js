export const getAllProducts = () => {
    return async function(dispatch){
        let result = []
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        result = data.products
        dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: result
        })
    }
}
