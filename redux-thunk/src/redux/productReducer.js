export const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            state = action.payload
            return state
        default: 
            return state
    }
}