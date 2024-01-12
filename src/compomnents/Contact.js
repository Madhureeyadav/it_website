import React from 'react'

const Contact = () => {
  return (
<>
<div>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url('./img/about (2).jpg')`,
          height: '50vh',
          backgroundSize:'cover',
       }}
      >
        <div className=" text-white  text-xl-center ">
        <p  className="p-5  fs-1">Contact</p>
        </div>
    
      </div>
    </div>
    <div className="contanier ">
<div className="row gx-2">
<div className="col-6 w-1/2 p-4 border">
  <div className="row g-4">
  <div className="col-6 border text-center">
    <p>Location</p>
    <p></p>
    <p></p>
  </div>
  <div className="col-6 border text-center">
  <p>Phone</p>
    <p></p>
    <p></p></div>
  </div>
  <div className="row g-4">
  <div className="col-6  border text-center">
  <p>Email</p>
    <p></p>
    <p></p>
    </div>
  <div className="col-6  border text-center">
  <p>Time</p>
    <p></p>
    <p></p>
  </div>
  </div>
 
</div>
<div className="col-6 w-1/2 p-2 border text-start ">
 <div className="p-2">
 <label className="col-2">Name : </label>
  <input  className="col-8" type="text" value="name" required/>

 </div>
 
  <div className="p-2">
  <label className="col-2">Email : </label>
  <input  className="col-8" type="text" value="email" required/>
  </div>

  <div className="p-2">
  <label className="col-2">Number : </label>
  <input  className="col-8" type="number" value="number" required/>
  </div>
 
  <div className="p-2">
  <label className=" col-2 ">Message : </label>
  <textarea  className="col-8  " type="text" rows='3' value="message" required/>
  </div>

  <div className="text-center px-6 py-2">
  <input type="button" value="submit" className=" "/>
  </div>
</div>
</div>
      </div>
</>
  )
}

export default Contact
