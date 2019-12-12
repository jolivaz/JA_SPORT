import React from 'react'
import MultiCarousel from '../multiCarousel/multiCarousel'
import { useSelector } from 'react-redux'
import './carouselShippingFree.css'

function CarouselShippingFree() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        }
      };

      let freeShippingProducts =  useSelector((state) => state.products);
      freeShippingProducts = freeShippingProducts.products.filter(product => product.shipping)

    return(
        <div className="section-free-shipping carousel-bg-light">
            <div className="section-free-shipping-title">
                <span>Ahorra con</span>
                <h5>Envios gratis</h5>
            </div>
            <div className="carousel-multi carousel-bg-light carousel-multi-80">
                <MultiCarousel responsive={responsive} products={freeShippingProducts}/>
            </div>
        </div>
    )
}

export default CarouselShippingFree;