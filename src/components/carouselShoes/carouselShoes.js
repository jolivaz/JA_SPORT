import React from 'react'
import MultiCarousel from '../multiCarousel/multiCarousel'
import 'react-multi-carousel/lib/styles.css'
import { useSelector } from 'react-redux'
import '../../carouselMulti.css'
import './carouselShoes.css'

function CarouselShoes() {

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

      let shoesProducts =  useSelector((state) => state.products);
      shoesProducts = shoesProducts.products.filter(product => product.category === 'Zapatos')
  
  return(
      <div className="section-shoes-carousel carousel-multi carousel-bg-move">
          <MultiCarousel responsive={responsive} products={shoesProducts}/>
      </div>
  )
}

export default CarouselShoes;