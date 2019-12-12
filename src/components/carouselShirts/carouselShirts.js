import React from 'react'
import MultiCarousel from '../multiCarousel/multiCarousel'
import { useSelector } from 'react-redux'
import './carouselShirts.css'

function CarouselShirts() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        }
    };

    let shirtsProducts =  useSelector((state) => state.products);
    shirtsProducts = shirtsProducts.products.filter(product => product.category === 'Franelas')

    return(
      <div className="section-shirt-carousel carousel-multi carousel-bg-none">
          <MultiCarousel responsive={responsive} products={shirtsProducts}/>
      </div>
  )
}

export default CarouselShirts;