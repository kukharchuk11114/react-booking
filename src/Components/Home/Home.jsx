import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className="homeText">
          <h1 className='title'>
            Plan Your Trip With Lil Co.
          </h1>

          <p className='subTitle'>
            Travel to your favourite city with respectful of the environment!
          </p>

          <button className='btn'>
            <a href="#">Explore now</a>
          </button>
        </div>

        <div className="homeCard grid">

          <div className="loacationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream Destination' />
          </div>
          <div className="distDiv">
            <label htmlFor="dist">Distation</label>
            <input type="text" placeholder='11/meters' />
          </div>
          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder='150$-500$' />
          </div>
          <button className='btn'>
            Search
          </button>

        </div>
      </div>
    </section>
  )
}

export default Home