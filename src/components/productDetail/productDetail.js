import React from "react"
import { updateProductsAction } from '../../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from '../breadcrumb/breadcrumb'
import "./productDetail.css"

function ProductDetail({idProduct}) {
  let allProducts = useSelector(state => state.products);
  let productActive = allProducts.products.filter(
    product => product.id === parseInt(idProduct)
  )

  // Dispatch wishlist to state
  const dispatch = useDispatch();
  const updateListProducts = (products) => dispatch( updateProductsAction(products));

  const changeWishList = (e,id,active) => {
      e.preventDefault()
      let newList = allProducts.products;
      let elementWishList = []
  
      elementWishList = newList.find(product => product.id === id );
      active ? (elementWishList.wishList = false) : (elementWishList.wishList = true)
      updateListProducts(elementWishList);

  }
  return (
    <div className="section-product">
      <Breadcrumb name={productActive[0].name} category={productActive[0].category}/>
          <div key={productActive[0].id} className="product-item">
            <div className="product-item-img">
              <img src={productActive[0].img} alt={productActive[0].name} />
            </div>
            <div className="product-item-detail">
              <div className="product">
                  {
                    productActive[0].shipping ? 
                    (
                      <i className="fas fa-shipping-fast"></i>
                    ) : null
                  }
                  <div className="wishlist">
                  {
                      productActive[0].wishList ?
                              <i className="fas fa-heart" onClick={e => changeWishList(e, productActive[0].id,true)}></i>
                          :
                              <i className="far fa-heart" onClick={e => changeWishList(e, productActive[0].id,false)}></i> 
                  }
                  </div>
              </div>
              <div className="product-item-name">
                <div className="product-item-name-brand">
                  <h5>{productActive[0].name}</h5>
                  <span>{productActive[0].brand}</span>
                  <div>
                    <label className="title-description">Descripcion:</label>
                    <p className="text-description">{productActive[0].description}</p>
                  </div>
                </div>
              </div>
              <div className="product-item-prices">
                <div className="product-item-prices-mount">
                  {productActive[0].discount > 0 ? (
                    <span className="product-detail-mount-discount">${productActive[0].price}</span>
                  ) : null}
                  {productActive[0].discountc}
                  <span className="product-detail-mount-price">
                    ${productActive[0].price - (productActive[0].price * productActive[0].discount) / 100}
                  </span>
                </div>
                <div className="product-item-prices-descount">
                  {productActive[0].discount > 0 ? <span>{productActive[0].discount}%</span> : null}
                </div>
              </div>
              <div className="product-item-buy">
                    <button>Comprar</button>
              </div>
            </div>
          </div>
    </div>
  );
}

export default ProductDetail;
