import React from 'react';
import { useParams } from 'react-router-dom';

const Webpage = ({props}) => {
  const { id } = useParams();

  const Dynamic= [{
    id:1,
    image: '../img/w6.jpg',
    title: 'Web Development',
    description: 'A website or web application is made through a process called web development. It involves the development of the website or web applications front - end(client - side) and back - end(server - side).We provide complete web development services to assist companies in creating an online presence and achieving their digital objectives.Our teams of experts work closely with our clients to create custom websites that are user - friendly,attractive, and optimized for conversions.',
    Link: '/web'
}, {
    id:2,
    image: '../img/w3.jpg',
    title: 'Mobile App Development',
    description: 'App development can be a valuable investment for businesses looking to improve customers engagement and to reach new markets.We develop Android and IOS applications  for our clients,startups,and enterprises.Depending on your business needs,our experienced and dedicated developers can design and develop a creative,customer - focused mobile application that provides a distinctive and user - friendly experience for your users. ',
    Link: '/android'
},
{
    id:3,
    image: '../img/w2.jpg',
    title: 'Software Development',
    description: 'Software development is a multi-stage process that starts with planning and ends with maintenance. The aim of software development is to design and produce software applications that are user-friendly, dependable, and efficient. The process of planning, building, testing, and maintaining software applications is known as software development. Planning, analysis, design, execution, and maintenance are some of the processes involved.',
    Link: '/developer'
},
{
    id:4,
    image: '../img/w4.jpg',
    title: 'Software Testing',
    description: 'In the fast-paced world of software development, ensuring the quality and reliability of software products is crucial for success. This is where Obicule Technologies steps in as a leading provider of exceptional software testing services. With a commitment to excellence and a team of highly skilled professionals, Obicule Technologies offers a unique and comprehensive testing solution that can revolutionize your software development process.',
    Link: '/tsting'
},
{
    id:5,
    image: '../img/w1.jpg',
    title: 'Web Design',
    description: 'When we create a website design for your company, we focus on creating an attractive and user-friendly website that effectively communicates company s brand and message.It reflects the company s commitment to sustainability,outdoor adventure.Web design is the process of creating a visually appealing and user - friendly experience for a website or web application.',
    Link: '/design'
}, {
    id:6,
    image: '../img/w5.jpg',
    title: 'Digital Marketing',
    description: 'We provide web design services that assist businesses in enhancing their online performance through digital marketing, numerous techniques. Your web audience can be found, expanded, and converted with the help of our devoted team of internet marketers. It relates to recent technologies like Social Media Optimisation, Search Engine Optimisation and Social Media Marketing.',
    Link: '/digital'
}

];
 
const dyn = Dynamic.find((item) => item.id.toString() === id.toString());

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
        <p  className="p-5  fs-1">Web Developer</p>
        </div>
      </div>
    </div>
     <div className="container">
     <p>{dyn.title}</p>
        <p>{dyn.description}</p>
        </div>   
       <div className="  border-2 m-2 text-center border p-5 ">
        <div><p>{dyn.title}</p></div>
        <div className="d-flex justify-content-around gx-2">
         <div> <img src={dyn.image} alt="" width="450px" height="300px" /></div>
        <p>{dyn.description}</p>
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
export default Webpage;
