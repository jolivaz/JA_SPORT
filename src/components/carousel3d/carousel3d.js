import React from 'react'
import Carousel from "react-3d-carousels";
import { Link } from "react-router-dom";
import './carousel3d.css'

function Carousel3d({images}) {
    return(
      <div className="carousel-3d">
          <div className="carousel-3d-block">
            <Carousel
              width={200}
              height={200}
              direction={"horizontal"}
              effect={"3d"}
              index={0}
            > 
            {
              images.map(image => (
                image.id ? 
                <Link to={`/product/${image.id}`} key={image.id}>
                   <div className="carousel-3d-block-int" key={image} style={{width: 300, height: 300 }}>
                    <img alt='brand' src={image.img} />
                  </div>
                </Link>
                :
                <div className="carousel-3d-block-int" key={image} style={{width: 300, height: 300 }}>
                  <img alt='brand' src={image.img} />
                </div>
              ))
            }
            </Carousel>
          </div>
      </div>
  )
}

export default Carousel3d;