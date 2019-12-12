import React from 'react'
import { useSelector } from 'react-redux'
import './offer.css'

function Offer() {

    let offerProducts =  useSelector((state) => state.products);
    offerProducts = offerProducts.products.filter(product => product.discount > 0)
  
  return(
      <div className="section-offer">
          {

            offerProducts.length > 0  ?
                offerProducts.map(product =>

                    <div key={product.id} className="offer-item">
                        <div className="offer-item-img">
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <div className="offer-item-prices">
                        <div className="offer-item-prices-mount">
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
                            <div className="offer-item-prices-descount">
                                {
                                    product.discount > 0 ?
                                    <span>{product.discount}%</span>
                                    : null
                                }
                            </div>

                        </div>
                        <div className="offer-item-name">
                            <div className="offer-item-name-brand">
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

export default Offer;