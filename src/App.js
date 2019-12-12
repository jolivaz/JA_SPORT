import React, { Fragment } from 'react'
import CarouselShippingFree from './components/carouselShippingFree/carouselShippingFree'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarouselShirts from './components/carouselShirts/carouselShirts'
import CarouselShorts from './components/carouselShorts/carouselShorts'
import CarouselShoes from './components/carouselShoes/carouselShoes'
import BannerSmall from './components/bannerSmall/bannerSmall'
import Category from './components/category/category'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import Search from './components/search/search'
import Offer from './components/offer/offer'
import { Provider } from 'react-redux'
import store from './store';
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" 
                       render={() => (
                         <Fragment>
                            <Banner />
                            <CarouselShippingFree />
                            <CarouselShirts />
                            <BannerSmall />
                            <CarouselShorts />
                            <CarouselShoes />
                         </Fragment>
                       )}/>
            <Route exact path="/search" 
                       render={() => (
                         <Fragment>
                            <Search />
                            <CarouselShippingFree />
                         </Fragment>
                       )}/>   
            <Route exact path="/offer" 
                       render={ props => {
                         return(
                          <Fragment>
                              <Offer />
                              <CarouselShoes />
                          </Fragment>
                        )
                       }}/>  

            <Route exact path="/category/:name"               
                        render={ props => {
                         const categoryName = props.match.params.name
                         return(
                          <Fragment>
                              <Category categoryName={categoryName} />
                              <CarouselShoes />
                          </Fragment>
                        )
                       }}/>  

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
