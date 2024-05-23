import React from 'react'
import './blog.scss'

import { BsArrowRightShort } from "react-icons/bs";

// import imgs--------------
import london from '../../Assets/img/london.jpeg';
import krakow from '../../Assets/img/krakow.jpeg';
import paris from '../../Assets/img/paris.jpeg';
import lisabon from '../../Assets/img/lisabon.jpeg';



const Posts = [
  {
    id: 1,
    postImg: london,
    postTitle: 'Beautifull London, let us to travel',
    desc: 'Great Britain vbla bla bla bla lba bla bla bla bla bla'   
  },
  {
    id: 2,
    imgSrc: krakow,
    destTitle: 'Romantic Krakow, let us to travel',
    desc: 'Great Britain bla bla bla bla lba bla bla bla bla bla'
  },
  {
    id: 3,
    postImg: lisabon,
    postTitle: 'Beautifull London, let us to travel',
    desc: 'Great Britain vbla bla bla bla lba bla bla bla bla bla'   
  },
  {
    id: 4,
    imgSrc: paris,
    destTitle: 'Romantic Krakow, let us to travel',
    desc: 'Great Britain bla bla bla bla lba bla bla bla bla bla'
  }
]
const Blog = () => {
  return (
    <section className='Blog'>
      <div className='secContainer'>

        <div className='secIntro'>
          <h2 className='secTitle'>
            Our Best Blog?
          </h2>
          <p>Hello, I'm sharing a clean and responsive react Travel and Stay Website to you. 
It's composed of Hooks (useState and useEffect), Aos Library for Animations and React-Icons 
          </p>
        </div>

        <div className='mainContainer grid'>
         { Posts.map((pre)=>{
          const  {id, imgSrc, destTitle, desc}= pre;
            return(<div className="singlePost grid">
                    <div className="imgDiv">
                      <img src={imgSrc} alt={destTitle} />              
                    </div>

                    <div className="postDetails">
                      <h3>{destTitle}</h3>
                      <p>{desc} </p>              
                    </div>

                    <a href="#" className='flex'>
                    <BsArrowRightShort className='icon' />
                    Read More
                    </a>
                  </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog