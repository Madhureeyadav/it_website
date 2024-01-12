import React from 'react';
import About from './Abouts/About';
//import Service from './Service'
import BackgroundImage from './BackgroundImage';
import data from '../compomnents/data'

const Fontpage = () => {
  return (
    <>
<BackgroundImage/>
    <About/>
 <div class="container">
<div class="row d-flex flex-wrap justify-content-center align-items-center">
  <p className="h2 p-4">Check Our Service</p>
 {data.map( datas =>(
  <div  key={datas.id} class="m-3 col-md-12 col-lg-5 p-2 border shadow-lg rounded ">
  <p class='h3 text-black'>{datas.title}</p>
  <p class='fs-6 text-dark'>{datas.description}</p>
</div>
 ))} 
 
</div>
</div>

<div>
  <p className="h2 pt-5">We are working with them</p>
  </div>
 <marquee 
  behavior='scroll'
  scrollamount='20'
  direction='right'
 >
    <div className=" container h-20 w-10 pt-3 ">
 
    <img src="./img/p1.png" className="px-4 " alt="logo"/>
    <img src="./img/p2.png" className="px-4 " alt="logo"/>
    <img src="./img/p3.jpg"  className="px-4 " alt="logo"/>
    <img src="./img/p4.png" className="px-4 "alt="logo"/>
    <img src="./img/p5.jpg" className="px-4 "alt="logo"/>
    <img src="./img/p6.png" className="px-4 "alt="logo"/>
    </div>
    </marquee>


    </>
  )
}

export default Fontpage
