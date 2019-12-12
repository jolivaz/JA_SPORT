import React from 'react'
import { updateProductsAction } from '../../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux';
import CarouselMulti from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../../carouselMulti.css'
import './multiCarousel.css'

function MultiCarousel({responsive, products}) {

    const allProducts = useSelector( ( state )  => state.products);

    // Dispatch wishlist to state
    const dispatch = useDispatch();
    const updateListProducts = (products) => dispatch( updateProductsAction(products));

    const changeWishList = (e,id,active) => {
        e.preventDefault()
        let newList = allProducts.products
        newList.map(product => product.id === id ?
            active ? product.wishList = false : product.wishList = true 
            :
            product
        ) 
        updateListProducts(newList)

    }

    return(
        <CarouselMulti responsive={responsive}>
            {
                products.length > 0 ?
                products.map(product =>

                    <div key={product.id} className="carousel-multi-item">
 
                        <div className="wishlist">
                        {
                            
                            product.wishList ?
                                    <i className="fas fa-heart" onClick={e => changeWishList(e, product.id,true)}></i>
                                :
                                    <i className="far fa-heart" onClick={e => changeWishList(e, product.id,false)}></i> 
                        }
                        </div>
 
                        <div className="carousel-multi-item-img">
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <div className="carousel-multi-item-prices">
                            <div className="carousel-multi-item-prices-mount">
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
                            <div className="carousel-multi-item-prices-descount">
                                {
                                    product.discount > 0 ?
                                    <span>{product.discount}%</span>
                                    : null
                                }
                            </div>

                        </div>
                        <div className="carousel-multi-item-name">
                            <div className="carousel-multi-item-name-brand">
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
                : null
            }
        </CarouselMulti>
  )
}

export default MultiCarousel;