import React from "react";
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer() {

  const categories = ['zapatos','franelas','shorts','balones']

  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  JA SPORT<span></span>
                </h5>
                <p>Venta de articulos deportivos</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Categorias<span></span>
                </h5>
                <ul className="thumbnail-widget list-categories">
                <Link to={`/`}>
                  <li className="nav-item">
                      <span className="nav-link">
                          Home
                      </span>
                  </li>
                </Link>
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
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Se parte de nosotros<span></span>
                </h5>
                <p>Ten descuentos los mejores descuentos.</p>
                <a className="btn" href="#." target="_blank">
                  Registrarme
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Estamos ubicados<span></span>
                </h5>
                <p title="glorythemes">
                  Machain 4116, Buenos Aires. Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright Company Name © 2016. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
