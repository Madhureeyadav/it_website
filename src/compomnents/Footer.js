import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (

    <div class="container  bg-dark text-light">

<div class="row d-flex flex-wrap  align-items-center">
  <div class="m-3 col-md-12 col-lg-5 p-2 border">

  <form>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label justify-content-start flex">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control"/>
  <input type="text" aria-label="Last name" class="form-control"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label text-start">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>


<div class="mt-3 ">
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>



 
  </div>
  <div class="m-3 col-md-12 col-lg-5 p-2 border">
    
  </div>
  </div>
  </div>
  )
}

export default Footer
