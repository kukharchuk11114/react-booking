import React from 'react'
import './popular.scss'
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

// import images
import img from '../../Assets/img/london.jpeg'

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
            <div className="textDiv">
              <h2 className='secTitle'>Popular Destination</h2>
              <p>kndvksdv skdvnskdv ksdvnksdvn ksdvnskdvn ksdnvksnv dksvnksdvn skdvnksdvm </p>
              
              <div className="iconsDiv flex">
                <BsArrowLeft className='icon leftIcon'/>
                <BsArrowRight className='icon rightIcon'/>                
              </div>
            </div>
        </div>

        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage"> 
            <img src={img} alt="Image Title" />

            <div className="overlayInfo">
              <h3>Some text</h3>
              <p>sdklfskdl sdlfnksdjf sldkfskdlfn </p>

              <BsArrowRight className='icon'/>
            </div>
            </div>
            

          </div>

          <div className="desFooter">
            <div className="number">
              01
            </div>

            <div className="desText flex">
              <h6>London</h6>
              <span className='flex'>
                <span className='dot'>
                  <BsDot  className='icon'/>
                </span>
                dot
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular 