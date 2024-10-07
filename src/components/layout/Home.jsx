import React from 'react'
import './Home.css'
import 'animate.css';



const Home = () => {
  return (
    <>   
    <section className="banner">
      <div className="animated-overlay"></div>
      <div className="banner-content animate__animated animate__fadeIn">
        <h1 className="animate__animated animate__fadeInDown">Welcome to Raees Store</h1>
        <p className="animate__animated animate__fadeInUp">Your One-Stop Shop for Quality and Style</p>
        <a href="#shop" className="banner-btn">
          Shop Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </section>

    </>

  )
}

export default Home