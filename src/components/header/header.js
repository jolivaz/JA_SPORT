import React, { useState,useEffect } from 'react'
import { searchProductsAction } from '../../actions/productsActions'
import HeaderSearch from '../headerSearch/headerSearch'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../../logo.png'
import './header.scss'

function Header(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.body.addEventListener('click', handleOutSearchHeader);
      });
    const [searchValue, guardarSearchValue] = useState('');
    const [showMenu, guardarShowMenu] = useState(false);
    const [flagWriting, guardarflagWriting] = useState(false);
    const [classNameMenuMobile, guardarclassNameMenuMobile] = useState('menu-header')
    const [classIconCloseMobile, guardarclassIconCloseMobile] = useState('fas fa-times-circle')
    const categories = ['Zapatos','Franelas','Shorts','Balones']
    //dispatch search
    const dispatch = useDispatch();
    const agregarBusqueda = (value) => dispatch( searchProductsAction(value) );
    const searchProducts = useSelector(state => state.products.searchProducts).slice(0, 5);
    const handleSearch = () => {
        props.history.push('/search')
    }
    const handleShowMenu = (e) => {
        e.preventDefault()
        guardarShowMenu(!showMenu)
        if (showMenu){
            guardarclassNameMenuMobile('menu-header open')
            guardarclassIconCloseMobile('fas fa-times-circle active')
        } else {
            guardarclassNameMenuMobile('menu-header')
            guardarclassIconCloseMobile('fas fa-times-circle')
        }
    }
    const handleOutSearchHeader = e => {
        if(e.srcElement.className !== 'body header-products-search') {
            setTimeout(()=> {guardarflagWriting(false)},500)
        }
    }
    const handleWriting = (e) => {
        guardarSearchValue(e.target.value)       
        agregarBusqueda(e.target.value)
        if (e.target.value === '') {
            guardarflagWriting(false)
        } else {
            guardarflagWriting(true)
        }   
    }
    return(
        <nav className="header-app">
            <Link to="/"className="logo" >
                <img src={Logo} alt="logo"/>
            </Link> 
            <i className="fas fa-bars" onClick={e => handleShowMenu(e)}></i>
            <i className={classIconCloseMobile} onClick={e => handleShowMenu(e)}></i>
            <div className={classNameMenuMobile}>
                <div className="header-app-search">
                    <div className="header-app-input-search">
                        <input 
                            onKeyDown={ (e) => e.keyCode === 13 ? handleSearch() : null }
                            value={searchValue}
                            placeholder="Escriba el producto que busca" 
                            onChange={(e) => handleWriting(e)} />
                        <Link to='/search' className="logo-search" >
                            <i className="fas fa-search" onClick={() => handleSearch()}></i>
                        </Link>
                    </div>
                    {
                        flagWriting ? 
                        <HeaderSearch 
                            onClick={() => guardarflagWriting(true)}
                            history={props.history}
                            searchProducts={searchProducts}
                            guardarflagWriting={guardarflagWriting} /> 
                        : null
                    }
                    
                </div>
                <div className="lista" id="navbarText">
                    <ul className="items-top">
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
            </div>
      </nav>
    )
}

export default withRouter(Header);