import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import './productHeaderSearch.scss'

function ProductHeaderSearch({product}) {
    return(
        <div>
            <Link 
                to={`/product/${product.id}`} key={product.id} 
                className="element-product-search">
                <div className="element-product-search-img">
                    <img src={product.img} alt={product.name}/>
                </div>
                <div className="element-product-search-detail">
                    <p>{product.name}</p>
                    <p className="brand">{product.brand}</p>
                </div>
                {
                    product.discount > 0 ?
                    <div className="element-product-search-price-item">
                        <p className="price">${product.price}</p>
                        <p className="real-price">$               
                        {product.price - (product.price * product.discount) / 100}
                        </p>
                    </div>
                    :
                    <div className="element-product-search-price-item">
                        <p className="real-price" >${product.price}</p>
                    </div>
                    }
                <div className="element-product-search-discount">
                    <p>{product.discount}%</p>
                </div>  
            </Link>           
        </div>
    )
}

export default withRouter(ProductHeaderSearch);