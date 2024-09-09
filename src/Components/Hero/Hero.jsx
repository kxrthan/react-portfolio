import React from 'react'
import './Hero.css'
import profile_img from '../../assets/keerthannn.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Keerthan MS,</span> Currently Working in frontend and Gen-AI.</h1>
        <p>I'm from India , currently pursuing my engineering degree in computer science, and I am open to work opportunities</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>

    </div>
  )
}

export default Hero