import React from 'react'
import './banner.css'
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'

function Banner() {
	const elementBanner =  useSelector((state) => state.banner);
	const elementBanner2 =  useSelector((state) => state.products.recommended);
	console.log('elementBanner2', elementBanner2)
  	return(
		<Carousel>
			{
				elementBanner.banner.map(element => 
					<Carousel.Item key={element.id}>
						<img
							className="d-block w-100"
							src={element.img}
							alt={element.title}
						/>
						<Carousel.Caption>
							<h3>{element.title}</h3>
							<p>{element.description}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)
			}
		</Carousel>
  )
}

export default Banner;