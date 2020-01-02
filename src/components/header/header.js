import React, { useState,useEffect } from 'react'
import { searchProductsAction } from '../../actions/productsActions'
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Logo from '../../logo.png'
import './header.css'

function Header(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      });
    const [searchValue, guardarSearchValue] = useState('');
    const categories = ['zapatos','franelas','shorts','balones']
    //dispatch search
    const dispatch = useDispatch();
    const agregarBusqueda = (value) => dispatch( searchProductsAction(value) );
    const handleSearch = () => {
        agregarBusqueda(searchValue)
        props.history.push('/search')
    }
    return(
        <nav className="header-app">
            <Link to="/"className="logo" >
                <img src={Logo} alt="logo"/>
            </Link> 
            <div className="header-app-search">
                <input 
                    onKeyDown={ (e) => e.keyCode === 13 ? handleSearch() : null }
                    placeholder="Escriba el producto que busca" 
                    onChange={(e) =>guardarSearchValue(e.target.value)} />
                <Link to='/search' className="logo-search" >
                    <i className="fas fa-search" onClick={() => handleSearch()}></i>
                </Link>
            </div>
            <div className="lista" id="navbarText">
                <ul>
                    <Link to={'/'} >
                            <li className="nav-item">
                                <span className="nav-link">
                                    Inicio
                                </span>
                            </li>
                    </Link>
                    <li className="nav-item nav-categories">
                        <span className="nav-link">
                            Categorias
                        </span>
                        <ul>
                            {
                                categories.map(name => 
                                <Link to={`/category/${name}`} key={name}>
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            {name.charAt(0).toUpperCase() + name.slice(1)}
                                        </span>
                                    </li>
                                </Link>
                                )
                            }
                        </ul>
                    </li>
                    <Link to={'/wishlist'} >
                            <li className="nav-item">
                                <span className="nav-link">
                                    Favoritos
                                </span>
                            </li>
                    </Link>
                </ul>
                <div className="user">
                    <i className="fas fa-user"></i>
                </div>
            </div>
      </nav>
    )
}

export default withRouter(Header);