export const getProducts = async () => {
    return async function(dispatch) {
        let result = []
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        result = data
        dispatch({
            type: 'GET_PRODUCT',
            payload: result
        })
    }
}