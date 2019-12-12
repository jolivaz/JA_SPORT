export const searchProductsAction = search => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: search
    }
}

export const addProductsAction = products => {
    return {
        type: 'ADD_PRODUCTS',
        payload: products
    }
}

export const deleteProductsAction = id => {
    return {
        type: 'DELETE_PRODUCTS',
        payload: id
    }
}