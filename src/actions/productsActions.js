export const searchProductsAction = search => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: search
    }
}

export const updateProductsAction = products => {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: products
    }
}

export const deleteProductsAction = id => {
    return {
        type: 'DELETE_PRODUCTS',
        payload: id
    }
}

export const filterBrandsProductsAction = filter => {
    return {
        type: 'FILTER_BRANDS_PRODUCTS',
        payload: filter
    }
}