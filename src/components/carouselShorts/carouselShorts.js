import React from 'react'
import MultiCarousel from '../multiCarousel/multiCarousel'
import { useSelector } from 'react-redux'
import './carouselShorts.scss'

function CarouselShorts() {

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

    let shortsProducts =  useSelector((state) => state.products);
    shortsProducts = shortsProducts.products.filter(product => product.category === 'Shorts')

    return(
        <div className="section-shorts-carousel carousel-multi carousel-bg-none">
            <MultiCarousel responsive={responsive} products={shortsProducts}/>
        </div>
  )
}

export default CarouselShorts;