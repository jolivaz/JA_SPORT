import React from 'react'
import ProductHeaderSearch from './productHeaderSearch/productHeaderSearch'
import { withRouter } from 'react-router-dom'
import './headerSearch.scss'

function HeaderSearch({history,searchProducts,guardarflagWriting}) {
    const handleShowMore = e => {
        guardarflagWriting(false)
        history.push('/search')
    }
    return(
        <div className="header-products-search">
            {
                searchProducts.length > 0 ?
                <div>
                    {
                        searchProducts.map(product => (
                            <ProductHeaderSearch 
                                product={product} 
                                key={product.id} />
                        ))
                    }
                    <div className="show-more" onClick={e => handleShowMore(e)}>
                            Ver mas
                    </div>
                </div>
                : 
                <div className="without-results">
                    <p>No se han encontrado productos</p>
                </div>
            }
        </div>
    )
}

export default withRouter(HeaderSearch);