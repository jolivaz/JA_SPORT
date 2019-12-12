import React from 'react'
import { Link } from 'react-router-dom';
import './bannerSmall.css'


function BannerSmall() {
  return(
	<div className="section-banner-small">
		<div className="section-banner-small-text">
			<h2>Ofertas de navidad</h2>
			<p>50% en productos seleccionados</p>
		</div>
		<Link to="/offer">
			<button>VER OFERTAS</button>
		</Link>
	</div>
  )
}

export default BannerSmall;