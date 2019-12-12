import React from "react";
import { useSelector } from "react-redux";
import "./wishList.css";

function WishList() {
  let wishlistProducts = useSelector(state => state.products);
  wishlistProducts = wishlistProducts.products.filter(
    product => product.wishList
  );
  return (
    <div className="section-wishlist">
      {wishlistProducts.length > 0 ? (
        wishlistProducts.map(product => (
          <div key={product.id} className="wishlist-item">
            <div className="wishlist-item-img">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="wishlist-item-name">
              <div className="wishlist-item-name-brand">
                <h5>{product.name}</h5>
                <span>{product.brand}</span>
              </div>
              {product.shipping ? (
                <i className="fas fa-shipping-fast"></i>
              ) : null}
            </div>
            <div className="wishlist-item-prices">
              <div className="wishlist-item-prices-mount">
                {product.discount > 0 ? (
                  <span className="mount-discount">${product.price}</span>
                ) : null}
                {product.discountc}
                <span className="mount-price">
                  ${product.price - (product.price * product.discount) / 100}
                </span>
              </div>
              <div className="wishlist-item-prices-descount">
                {product.discount > 0 ? <span>{product.discount}%</span> : null}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h5>No se han encontrado resultados</h5>
        </div>
      )}
    </div>
  );
}

export default WishList;
