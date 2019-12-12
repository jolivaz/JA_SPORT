import React from 'react'
import { useSelector } from 'react-redux'
import './search.css'

function Search() {

    let searchProducts =  useSelector((state) => state.products.searchProducts);
  
  return(
      <div className="section-search">
          {

            searchProducts.length > 0  ?
                searchProducts.map(product =>

                    <div key={product.id} className="search-item">
                        <div className="search-item-img">
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <div className="search-item-prices">
                        <div className="search-item-prices-mount">
                                {
                                    product.discount > 0 ?
                                    <span className="mount-discount">
                                        ${product.price}
                                    </span>
                                    : null
                                }
                                {product.discountc}
                                <span className="mount-price">${product.price -(product.price * product.discount)/100}</span>
                            </div>
                            <div className="search-item-prices-descount">
                                {
                                    product.discount > 0 ?
                                    <span>{product.discount}%</span>
                                    : null
                                }
                            </div>

                        </div>
                        <div className="search-item-name">
                            <div className="search-item-name-brand">
                                <h5>{product.name}</h5>
                                <span>{product.brand}</span>
                            </div>
                            {
                                product.shipping ?
                                <i className="fas fa-shipping-fast"></i>
                                : null
                            }
                        </div>

                    </div>
                )
                : 
                <div>
                    <h5>No se han encontrado resultados</h5>
                </div>
            }
      </div>
  )
}

export default Search;