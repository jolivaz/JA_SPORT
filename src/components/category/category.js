import React from 'react'
import { useSelector } from 'react-redux'
import './category.css'

function Category({categoryName}) {

    const categoryActive = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    let offerProducts =  useSelector((state) => state.products);
    offerProducts = offerProducts.products.filter(
        product => product.category === categoryActive )
  
  return(
      <div className="section-category-all">
          <h2 className="title-category">{categoryActive}</h2>
          <div className="section-category">
          {

            offerProducts.length > 0  ?
                offerProducts.map(product =>

                    <div key={product.id} className="category-item">
                        <div className="category-item-img">
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <div className="category-item-prices">
                        <div className="category-item-prices-mount">
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
                            <div className="category-item-prices-descount">
                                {
                                    product.discount > 0 ?
                                    <span>{product.discount}%</span>
                                    : null
                                }
                            </div>

                        </div>
                        <div className="category-item-name">
                            <div className="category-item-name-brand">
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
      </div>
  )
}

export default Category;