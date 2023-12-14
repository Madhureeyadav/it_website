import React from 'react'
import {BrowerRouter as Router,Route,Switch} from 'react-router-dom';
import Servicepage from './Servicepage'
import About from './About'
const CustomerRouter = () => {
  return (
  
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/services" component={Servicepage} />
      </Switch>
    </Router>
   
  )
}

export default CustomerRouter
