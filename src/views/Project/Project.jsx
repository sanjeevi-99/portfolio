import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/table.png'
import img5 from  '../../images/portfolio2.png'
import img3 from  '../../images/login.jpg'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "Angular Datatable" img= {img7} link = "https://github.com/sanjeevi-99/angulardatatable"  />
            <ProjectBox title = "Portfolio Website" img= {img5} link = "https://github.com/sanjeevi-99/portfolio"  />
            <ProjectBox title = "Webpage with Signup/Login validation" img= {img3} link = "https://github.com/sanjeevi-99/front-end"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
