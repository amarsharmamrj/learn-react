export const products = (state = 4, action) => {
    switch(action.type){
        case 'GET_ALL_PRODUCTS':
            state = action.payload
            return state
        default:
            return state
    }
}