import React from 'react'
import './banner.scss'
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'

function Banner() {
	const elementBanner =  useSelector((state) => state.banner);
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