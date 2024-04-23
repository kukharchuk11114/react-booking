import React from 'react'
import './about.scss'

// images ----------------------------
import customer from '../../Assets/img/customer.jpg'
import mountian from '../../Assets/img/mountian.jpg'
import hiking from '../../Assets/img/hiking.jpg'
// video--------------------------------
import video from '../../Assets/img/video.mp4'


const About = () => {
  return (
    <section className='about section'>
      <div className='secContainer'>
        <h2 className="title">
          Why Hikings?
        </h2>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={mountian} alt="Image Name" />
            <h3>100+ Mountians</h3>
            <p>fkjdghdfjgkb dfjghndjf jdfg dfl gldfghlkk dfgk hdlfgk dlfk klf gdfkg dlkfg dfl glkhkhld fglhdlsk df'd fks' ;k';kdf;'sk fs';ksdfhsk fjsd hih oghoeioie </p>
          </div>
          <div className="singleItem">
            <img src={hiking} alt="Image Name" />
            <h3>1000+ Hikings</h3>
            <p>fkjdghdfjgkb dfjghndjf jdfg dfl gldfghlkk dfgk hdlfgk dlfk klf gdfkg dlkfg dfl glkhkhld fglhdlsk df'd fks' ;k';kdf;'sk fs';ksdfhsk fjsd hih oghoeioie </p>
          </div>
          <div className="singleItem">
            <img src={customer} alt="Image Name" />
            <h3>2000+ Customers</h3>
            <p>fkjdghdfjgkb dfjghndjf jdfg dfl gldfghlkk dfgk hdlfgk dlfk klf gdfkg dlkfg dfl glkhkhld fglhdlsk df'd fks' ;k';kdf;'sk fs';ksdfhsk fjsd hih oghoeioie </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>Wonderful House expirience there</h2>
              <p>fsdlfkshdjlfk sld fksdj fklsdjf lksdjflksdflk sdkfjsdlflsk dflksjdfsdlfkshdjlfk sld fksdj fklsdjf lksdjflksdflk sdkfjsdlflsk dflksjdfsdlfkshdjlfk sld fksdj fklsdjf lksdjflksdflk sdkfjsdlflsk dflksjdfsdlfkshdjlfk sld fksdj fklsdjf lksdjflksdflk sdkfjsdlflsk dflksjd  </p>
            </div>

          </div>
          <div className="cardVideo">
              <video src={video} autoplay loop muted
              type='video/mp4'></video>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About