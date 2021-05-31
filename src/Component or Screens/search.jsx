import React, { useContext, useReducer, useRef, useState } from 'react'

import ScheduleContext from '../contexts/schedulecontext'
import Myreducer from '../reducer/reducer'

const Search = () =>{
    const schedulecontext = useContext(ScheduleContext)
    const inputref = useRef()
    const [search , setSearch] = useState("")
  
    

    const handlesearch = (e) =>{
       setSearch(inputref.current.value)
       
        e.preventDefault()
        
    }

    
  
 
   

    
    

    return(
        <div >
            <br/>
            <h3 className="center"><i className="bi bi-search"></i> {search}</h3>
            <hr/>

            <div className=" col-md-5 center1" >
<div className="card animate__animated animate__pulse">
    <div className="card card-header">
        <h3>Buscar Profesor </h3>
    </div>
    <form onSubmit={handlesearch} className="card-body">
        <div className="form-group">
    <input type="text" className="form-control" placeholder="Nombre del profesor?" ref={inputref}  />
        </div>
        <div className="form-group">
    <button className="btn btn-block btn-outline-success"  >Buscar Profesor <i className="bi bi-search"></i></button>
        </div>
  </form>
</div>
</div>

<br/>
<div className=" center1 col-md-5 " >

<hr className="hided" />
 
{
  schedulecontext.profesores.filter(nombre => nombre.name.includes(search)).map(teacher => (
    <div name="separatiion br" key={teacher.id}>
    <div className="card animate__animated animate__zoomIn" >
    <div className="card-body">
      <h5 className="card-title center">{teacher.name}</h5>
      <p className="card-text center">{teacher.materia}</p>
{
teacher.turno.toLowerCase() == 'mañana'  && schedulecontext.horarios.map(schedule => (
<div className="card animate__animated animate__zoomIn" key={schedule.id}>
{
  schedule.turno.toLowerCase() == 'mañana' && 
  <div className="card-body"> 
  <h5 className="card-title">turno {schedule.turno}</h5> 
{
schedule.horainicio <= moment().format('h') && <p className="alert alert-info">El Profesor esta en clase <i className="bi bi-clock-history"></i></p>
}
{
schedule.horafinal <= moment().format('h') && <p className="alert alert-danger">La clase ya termino o no ha comenzado <i className="bi bi-clock-fill"></i></p>

}

  <p className="card-text">Comienza a las: {schedule.horainicio}</p>
  <p className="card-text">Termina a las : {schedule.horafinal}</p>
  </div>
}
</div>
) )

}
{
teacher.turno.toLowerCase() == 'tarde'  && schedulecontext.horarios.map(schedule => (
<div className="card animate__animated animate__zoomIn" key={schedule.id}>
{
  schedule.turno.toLowerCase() == 'tarde' && 
  <div className="card-body"> 
  <h5 className="card-title">turno {schedule.turno}</h5> 
  {
schedule.horainicio <= moment().format('h') && <p className="alert alert-info">El Profesor esta en clase <i className="bi bi-clock-history"></i></p>
}
{
schedule.horafinal <= moment().format('h') && <p className="alert alert-danger">La clase ya termino o no ha comenzado <i className="bi bi-clock-fill"></i></p>

}
{
schedule.horainicio > moment().format('h') && <p className="alert alert-danger">no ha comenzado <i className="bi bi-clock-fill"></i></p>
}


  <p className="card-text">Comienza a las:{schedule.horainicio}</p>
  <p className="card-text">Termina a las : {schedule.horafinal}</p>
  </div>
}
</div>
) )

}
{
teacher.turno.toLowerCase() == 'noche'  && schedulecontext.horarios.map(schedule => (
<div className="card animate__animated animate__zoomIn" key={schedule.id}>
{
  schedule.turno.toLowerCase() == 'noche' && 
  <div className="card-body"> 
  <h5 className="card-title">turno {schedule.turno}</h5> 
  {
schedule.horainicio <= moment().format('h') && <p className="alert alert-info">El Profesor esta en clase <i className="bi bi-clock-history"></i></p>
}
{
schedule.horafinal <= moment().format('h') && <p className="alert alert-danger">La clase ya termino o no ha comenzado <i className="bi bi-clock-fill"></i></p>

}
{
schedule.horainicio > moment().format('h') && <p className="alert alert-danger">no ha comenzado <i className="bi bi-clock-fill"></i></p>
}
  <p className="card-text">Comienza a las: {schedule.horainicio}</p>
  <p className="card-text">Termina a las : {schedule.horafinal}</p>
  </div>
}
</div>
) )

}

<br/>
      
    </div>
  </div>
  <br/>
  </div>

  ) )
}


 


</div>


 

        </div>
    )
}

export default Search