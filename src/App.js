import React, { Fragment } from 'react'
import CarouselShippingFree from './components/carouselShippingFree/carouselShippingFree'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarouselShirts from './components/carouselShirts/carouselShirts'
import CarouselShorts from './components/carouselShorts/carouselShorts'
import CarouselShoes from './components/carouselShoes/carouselShoes'
import ProductDetail from './components/productDetail/productDetail'
import BannerSmall from './components/bannerSmall/bannerSmall'
import Category from './components/category/category'
import WishList from './components/wishList/wishList'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import Search from './components/search/search'
import Filter from './components/filter/filter'
import Offer from './components/offer/offer'
import ShowBrandsRecommended from './components/showBrandsRecommended/showBrandsRecommended'
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
                            <ShowBrandsRecommended />
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
                           <div className="section-filter-search">
                            <Filter />
                            <Search />
                           </div>
                            <CarouselShippingFree />
                         </Fragment>
                       )}/>   
            <Route exact path="/offer" 
                       render={ () => {
                         return(
                          <Fragment>
                              <Offer />
                              <ShowBrandsRecommended />
                          </Fragment>
                        )
                       }}/>  

            <Route exact path="/category/:name"               
                        render={ props => {
                         const categoryName = props.match.params.name
                         return(
                          <Fragment>
                              <Category categoryName={categoryName} />
                              <ShowBrandsRecommended />
                          </Fragment>
                        )
                       }}/>  

            <Route exact path="/wishlist" 
                       render={ () => {
                         return(
                          <Fragment>
                              <WishList />
                          </Fragment>
                        )
                       }}/> 
            <Route exact path="/product/:id"               
                        render={ props => {
                         const idProduct = props.match.params.id
                         return(
                          <Fragment>
                              <ProductDetail idProduct={idProduct} />
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
