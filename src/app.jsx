import React from 'react';
import Clock from './Component or Screens/Clock';
import TeacherManager from './Component or Screens/manageteacher';
import HourManager from './Component or Screens/managinghours';
import Search from './Component or Screens/search';
import ScheduleContext from './contexts/schedulecontext';
import AppRouter from './Rutas/AppRouter';



class App extends React.Component{ 

  constructor(){
      super()

    this.Schedule = {
      horarios: JSON.parse(localStorage.getItem('schedulekeys')),
      profesores: JSON.parse(localStorage.getItem('teacherkeys'))
   }


  }

  

  render(){
    return( 
     <div>
  
  <ScheduleContext.Provider value={this.Schedule}>
    <AppRouter />
  </ScheduleContext.Provider>
  
    
       </div>
    )
  }
}


export default App;