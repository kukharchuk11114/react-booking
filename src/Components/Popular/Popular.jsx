import React from 'react';
import './popular.scss';
import { BsArrowRight, BsArrowLeft, BsDot } from 'react-icons/bs';

// import images
import london from '../../Assets/img/london.jpeg';
import krakow from '../../Assets/img/krakow.jpeg';
import paris from '../../Assets/img/paris.jpeg';
import lisabon from '../../Assets/img/lisabon.jpeg';

const Data = [
  {
    id: 1,
    imgSrc: london,
    destTitle: 'London',
    location: 'Great Britain',
    grade: 'Cultural Relax'
  },
  {
    id: 2,
    imgSrc: krakow,
    destTitle: 'Krakow',
    location: 'Poland',
    grade: 'Cultural Relax'
  },
  {
    id: 3,
    imgSrc: paris,
    destTitle: 'Paris',
    location: 'France',
    grade: 'Cultural Relax'
  },
  {
    id: 4,
    imgSrc: lisabon,
    destTitle: 'Lisabon',
    location: 'Portugal',
    grade: 'Cultural Relax'
  }
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>kndvksdv skdvnskdv ksdvnksdvn ksdvnskdvn ksdnvksnv dksvnksdvn skdvnksdvm</p>

            <div className="iconsDiv flex">
              <BsArrowLeft className="icon leftIcon" />
              <BsArrowRight className="icon rightIcon" />
            </div>
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map((destination) => {
            const { id, imgSrc, destTitle, location } = destination;
            return (
              <div className="singleDestination" key={id}>
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>

                    <BsArrowRight className="icon" />
                  </div>
                </div>

                <div className="desFooter">
                  <div className="number">0{id}</div>

                  <div className="desText flex">
                    <h6>{destTitle}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Lil Co.
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
