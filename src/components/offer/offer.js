import React from "react";
import { updateProductsAction } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./offer.scss";

function Offer() {
  let offerProducts = useSelector(state => state.products);
  offerProducts = offerProducts.products.filter(
    product => product.discount > 0
  );

  const allProducts = useSelector(state => state.products);

  // Dispatch wishlist to state
  const dispatch = useDispatch();
  const updateListProducts = products =>
    dispatch(updateProductsAction(products));

  const changeWishList = (e, id, active) => {
    e.preventDefault();
    let newList = allProducts.products;
    let elementWishList = []

    elementWishList = newList.find(product => product.id === id );
    active ? (elementWishList.wishList = false) : (elementWishList.wishList = true)
    updateListProducts(elementWishList);
  };
  return (
    <div className="section-offer">
      {offerProducts.length > 0 ? (
        offerProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="offer-product">
            <div key={product.id} className="offer-item">
              <div className="wishlist">
                {product.wishList ? (
                  <i
                    className="fas fa-heart"
                    onClick={e => changeWishList(e, product.id, true)}
                  ></i>
                ) : (
                  <i
                    className="far fa-heart"
                    onClick={e => changeWishList(e, product.id, false)}
                  ></i>
                )}
              </div>
              <div className="offer-item-img">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="offer-item-prices">
                <div className="offer-item-prices-mount">
                  {product.discount > 0 ? (
                    <span className="mount-discount">${product.price}</span>
                  ) : null}
                  {product.discountc}
                  <span className="mount-price">
                    ${product.price - (product.price * product.discount) / 100}
                  </span>
                </div>
                <div className="offer-item-prices-descount">
                  {product.discount > 0 ? (
                    <span>{product.discount}%</span>
                  ) : null}
                </div>
              </div>
              <div className="offer-item-name">
                <div className="offer-item-name-brand">
                  <h5>{product.name}</h5>
                  <span>{product.brand}</span>
                </div>
                {product.shipping ? (
                  <i className="fas fa-shipping-fast"></i>
                ) : null}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div>
          <h5>No se han encontrado resultados</h5>
        </div>
      )}
    </div>
  );
}

export default Offer;
