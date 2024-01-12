import React from 'react';


const AndroidApp = () => {


return (
  <div>
    {dyn ? (
      <>
        <div className="gx-5">
      <div className="bg-image mt-1"
        style={{
          backgroundImage: `url('../img/w6.jpg')`,
          height: '50vh',
          width:'100%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
         }}>
        <div className=" text-white  text-xl-center ">
        <p  className="p-5  fs-1">Android App Development</p>
        </div>
      </div>
    </div>
     <div className="container">
   GNK Solutions Android app development services are not limited to just building apps from scratch. The team also provides app migration, maintenance, and support services, ensuring that the app stays up-to-date with the latest technologies and trends. Obicule Technologies’ Android app development services have helped businesses across various industries, including healthcare, finance, education, and e-commerce, to name a few. With a focus on quality and customer satisfaction, Obicule Technologies is committed to delivering top-notch Android app development services that meet the clients’ needs and exceed their expectations.
<p>
       
        </p>
        </div>   
       <div className="  border-2 m-2 text-center border p-5 ">
        <div><p>Comprehensive Development Process</p></div>
        <div className="d-flex justify-content-around gx-2">
         <div> <img src={dyn.image} alt="" width="450px" height="300px" /></div>
        <p>
        <li>Detailed analysis of client requirements.</li>
            <li>Custom app design that aligns with client's brand and objectives.</li>
            <li>Development phase using latest technologies and programming languages.</li>
            <li>Testing and quality assurance to ensure app meets client's expectations.</li>
            <li>Staying up-to-date with latest trends and technologies in Android app development.</li>
            <li>Focus on optimizing app for performance, speed, and security.</li>
<li>Creating visually appealing and user-friendly apps that provide seamless user experience.</li>
<li>Incorporating feedback from clients and users to make necessary improvements.</li>
        </p>
          </div>
          </div>
          <div className="  border-2 m-2 text-center border p-5 ">
        <div><p>{dyn.title}</p></div>
        <div className="d-flex justify-content-around gx-2">
         
        <p>{dyn.description}</p>
        <div> <img src={dyn.image} alt="" width="450px" height="300px" /></div>
          </div>
          </div>
      </>
    ) : (
      <p>User not found</p>
    )}
  </div>
);
};
export default AndroidApp;
