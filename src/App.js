
import './App.css';
import Fontpage from './compomnents/Fontpage'
import Navbar from './compomnents/Navbar'
import Footer from './compomnents/Footer'
import NavbarTab from './compomnents/NavbarTab'
import React,{useState,useEffect} from 'react';

const  App=() => {
  const[loading,setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() =>{
      setLoading(false);
    },2000);
    return () =>clearTimeout(timer);
  },[]);
  return (
    <div className="App">
{loading ? (
  <p  className="loading">Loading...</p>
):(
  <>

<Navbar/>
<NavbarTab/>
<Fontpage/>

<Footer />
</>)}



     </div>
  );
}

export default App;
