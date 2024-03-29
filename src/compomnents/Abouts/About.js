import {NavLink} from 'react-router-dom'
import './About.css';

const About = () => {
  return (
    <div class='shadow p-3 m-3 bg-body-tertiary rounded'>
    <div class="container">
      <div class="row">
      <div class="fs-1 p-3 bg-highlight text-center">About</div>
        <div class="col-md-6">
          <div class="d-flex flex-column justify-content-center ">
           
           
              <p class='h1'>Who Are We?</p>
              <p class='fs-6 py-2 text-start'>
                At the heart of [Your Company Name] is a team of dedicated and skilled professionals who share a common vision: to empower businesses through innovative IT solutions. With diverse expertise and a relentless pursuit of excellence, we bring a fresh approach to every project we undertake.
              </p>
          
          
      
        </div>
          </div>
    
        <div class="col-md-6  align-items-center">
        
            <img src="./img/ab1.jpg" alt="logo"  width="400px"/>
            {/* <div class="circle"></div> */}
         
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default About
