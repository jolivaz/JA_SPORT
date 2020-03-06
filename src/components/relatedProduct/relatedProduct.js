import React from 'react'
import MultiCarousel from '../multiCarousel/multiCarousel'
import { useSelector } from 'react-redux'
import './relatedProduct.scss'

function RelatedProduct({productActive}) {
    let allProducts = useSelector(state => state.products);
    let relatedProducts = allProducts.products.filter(
      product => product.category === productActive.category && 
                    product.brand === productActive.brand
    )
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        }
    };

    return(
      relatedProducts.length > 1 ?
        <div className="section-related-carousel carousel-multi carousel-bg-none">
            <h2 className="section-related-title">Productos relacionados</h2>
            <MultiCarousel responsive={responsive} products={relatedProducts}/>
        </div>
        : null
  )
}

export default RelatedProduct;