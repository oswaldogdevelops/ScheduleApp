import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Clock from '../Component or Screens/Clock';
import TeacherManager from '../Component or Screens/manageteacher';
import HourManager from '../Component or Screens/managinghours';
import Search from '../Component or Screens/search';
import Navbar from './navbar';


const AppRouter = () => {

   


 return(  
 <Router>
      <div>

<Navbar />
<Clock />

      <Switch>
      
          <Route exact path="/" component={ HourManager } />
          <Route exact path="/teacher" component={ TeacherManager} />
          <Route exact path="/search" component={ Search } />
          <Redirect to="/" />
         
         
      </Switch>
      </div>
  </Router>
)
}

export default AppRouter