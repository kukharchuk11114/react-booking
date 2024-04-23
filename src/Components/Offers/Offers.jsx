import React from 'react'
import './offers.scss'
import { LuBedSingle } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import hotel from "../../Assets/img/hotel.jpg"
import berlin from '../../Assets/img/london.jpeg';
import gdańsk from '../../Assets/img/krakow.jpeg';
import lublin from '../../Assets/img/paris.jpeg';


const Offer = [
  {
    id: 1,
    imgSrc: berlin,
    offerTitle: 'Berlin',
    location: 'Germany',
    price: "$6799"

  },
  {
    id: 2,
    imgSrc: gdańsk,
    offerTitle: 'Gdańsk',
    location: 'Poland',
    price: "$6699"
  },
  {
    id: 3,
    imgSrc: lublin,
    offerTitle: 'Lublin',
    location: 'Poland',
    price: "$2599"
  },
  
]

const Offers = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className='secTitle'>
            Special Offers
          </h2>
          <p>sdkfjsdkf kasdja kkasdjka ksadjsalkdj skdja lkasjd askjd las ladj lsadj </p>
        </div>

        <div className="mainContent grid">
          
            {
              Offer.map((parameters)=>{
                const { id, imgSrc, offerTitle, location, price } = parameters;
                return(
                  <div className="singleOffer">
              <div className='destImg'>
                <img src={imgSrc} alt={offerTitle}/>
                <span className='discount'>30% Off</span>
              </div>

              <div className="offerBody">

                <div className="price flex">
                  <h4>{price}</h4>
                  <span className='status'>For Rent</span>
                </div>

                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <LuBedSingle className='icon' />
                    <small>2 Beds</small>
                  </div>

                  <div className="singleAmenity flex">
                    <FaBath className='icon' />
                    <small>Bath</small>
                  </div>

                  <div className="singleAmenity flex">
                    <FaWifi className='icon' />
                    <small>Wi-Fi</small>
                  </div>

                  <div className="singleAmenity flex">
                    <FaVanShuttle className='icon' />
                    <small>Airoport Shuttle</small>
                  </div>
                </div>

                <div className="location flex">
                  <FaLocationDot className='icon'/>
                  <small>{location}</small>
                </div>

                <button className='btn flex'>
                  View Details
                  <FaArrowRight className='icon' />
                </button>
            </div>
          </div>
                )
              })
            }
        </div>
      </div>
    </section>
  )
}

export default Offers