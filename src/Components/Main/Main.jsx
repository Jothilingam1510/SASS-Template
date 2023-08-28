import React, { useEffect } from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Data

const Data=[
  {
    id:1,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"The epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
   {
    id:2,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"the epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
   {
    id:3,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"the epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
   {
    id:4,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"the epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
   {
    id:5,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"the epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
   {
    id:6,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"the epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
   {
    id:7,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"the epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
   {
    id:8,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"the epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
  {
    id:9,
    imgSrc: img,
    destTitle:"Bora Bora",
    location:"New Zeland",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"the epitomate romance the bora bora place i s very beatufiul in the world so we can stay here for long in the century time"
  },
]


const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
<section className='main container section'>
  <div className="secTitle">
    <h3 data-aos="fade-right" className='title'>Most Visited Destination </h3>
  </div>
  <div className="secContent grid">
    {
    Data.map(({id,imgSrc, destTitle,location,grade,fees,description}) => {
      return(
        <div key={id} data-aos="fade-up"  className="singleDestination">
          <div className="imageDiv">
            <img src={imgSrc} alt={destTitle}/>
          </div>
          <div className="cardInfo">
            <h4 className='destTitle'>{destTitle}</h4>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon"/>{location}
            </span>
            <div className="fees flex">
              <div className="grade">
                <span>{grade}<small>+1</small></span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <div className="desc">
              <p>{description}</p>
            </div>
            <button className="btn flex">
              DETAILS<HiOutlineClipboardCheck className='icon'/>
            </button>
          </div>
        </div>
    )
    })
    }
  </div>
</section>  
)
}

export default Main