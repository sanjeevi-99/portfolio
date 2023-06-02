import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>My Skills</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Web Development" text = "We offers a variety of website design and development services in which we use modern technologies of Era.." />
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Frontend Development" text = "I will enhance user experience through intuitive and viusally appealing interfaces.."/>
        <ServiceBox animation = "fade-up" icon = "fas fa-info-circle" heading = "Software Testing" text = "We provides professional software testing solutions to the valueable customers.." />
        <ServiceBox animation = "fade-up" icon = "fas fa-bookmark" heading = "SQL Operations" text = "Using SQL queries, I will efficiently retrive,modify and manage structed data .." />
        <ServiceBox animation = "fade-up" icon = "fas fa-users" heading = "Backend Development" text = "I will ensure efficient data processing and secure server-side functionally for seamless operations.." />
        <ServiceBox animation = "fade-up" icon = "fas fa-video" heading = "Video Editing" text = "We provides professional video editing services for your commercials and YouTube.." />
      </div>
    </div>
    </>
  )
}

export default Service
