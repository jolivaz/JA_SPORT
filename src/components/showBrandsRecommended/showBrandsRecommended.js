import React from 'react'
import {useSelector} from 'react-redux'
import Carousel3d from '../carousel3d/carousel3d'
import './showBrandsRecommended.scss'

function ShowBrandsRecommended() {
    let recommendedProducts = useSelector(state => state.products.recommended)
    return(
      <div className="show-brands-recommended">
          <div>
              <h2>Desliza y mira tus recomendados</h2>
          </div>
          <div className="show-brands-recommended-carousels">
            <Carousel3d images={recommendedProducts.nike} />
            <Carousel3d images={recommendedProducts.adidas} />
            <Carousel3d images={recommendedProducts.puma} />
          </div>
      </div>
  )
}

export default ShowBrandsRecommended;