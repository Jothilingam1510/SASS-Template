import React, { useEffect } from 'react'
import './footer.css'
import ocean from '../../Assets/ocean.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
<section className='footer'>
  <div className="videoDiv">
    <video src={ocean} loop autoPlay muted type='video/mp4'></video>
  </div>
  <div className="secContent container">
    <div className='contactDiv flex'>
      <div data-aos="fade-up" className="text">
        <small>KEEP IN TOUGH</small>
        <h2>Travel with Us</h2>
      </div>
      <div data-aos="fade-up" className="inputDiv flex">
        <input type="text" placeholder='Enter the Email Address' />
        <button data-aos="fade-up" className='btn flex ' type='submit'>
          SEND<FiSend className="icon"/>
        </button>
      </div>
    </div>
    <div className="footerCard flex">
      <div className="footerIntro flex">
        <div className="logoDiv">
          <a href='$' className='logo flex'>
            <MdOutlineTravelExplore className='icon'/>Travel.
          </a>
        </div>
        <div data-aos="fade-up" className="footerParagraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio excepturi sapiente vel eum odit dolore quae exercitationem placeat voluptatum voluptatibus autem nisi animi dolorem, vero iusto at consequatur amet.
        </div>
          <div data-aos="fade-up" className='footerSocials flex'>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <AiFillInstagram className='icon'/>
          </div>
      </div>

      <div data-aos="fade-up" className="footerLinks grid">
        {/* group one */}
        <div data-aos="fade-up" className="linkGroup">
          <span className='groupTitle'>
            Our Agency
          </span>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Services
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Insurance
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Agency
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Tourism
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Payment
          </li>
        </div>
        {/* group two */}
        <div data-aos="fade-up" className="linkGroup">
          <span className='groupTitle'>
            Partners</span>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Booking
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Rent cars
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Hostel World
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Trivago
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            TripAdvisor
          </li>
        </div>
        {/* group three */}
        <div data-aos="fade-up" className="linkGroup">
          <span className='groupTitle'>
            Uchiha
          </span>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Asura
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Madara
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Obito
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Itachi
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Sasuke
          </li>
        </div>
      </div>
      <div data-aos="fade-up" className="footerDiv flex">
        <small>BEST TRAVEL WEBSITE THEME</small>
        <small>COPYRIGHTS RESERVED  -JO -2023</small>

      </div>
    </div>
  </div>

</section>  
)
}

export default Footer