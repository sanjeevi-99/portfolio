import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Sanjeevi</h2>
        <p>Hi, my name is Sanjeevi K and I have experience working with sophisticated applications as a full stack developer intern. I'm familiar with both front-end and back-end technologies. I'm enthusiastic about developing modern web applications that are as user-friendly as possible. </p>
        <a href="https://www.linkedin.com/in/sanjeevi-k-83a88022a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
