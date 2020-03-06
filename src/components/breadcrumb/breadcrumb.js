import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import './breadcrumb.scss'

function Breadcrumb({name,category}) {
    return(
        <div className="breadcrumb">
            <Link to="/">
                <label className="breadcrumb-nav">Home</label>
            </Link>
            <i className="fas fa-chevron-right breadcrumb-icon"></i>
            <Link to={`/category/${category}`}>
                <label className="breadcrumb-nav">{category}</label>
            </Link>
            <i className="fas fa-chevron-right breadcrumb-icon"></i>
            <label className="breadcrumb-nav active">{name}</label>
        </div>
    )
}

export default withRouter(Breadcrumb);