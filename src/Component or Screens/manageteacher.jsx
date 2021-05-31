import React, { useContext, useEffect, useReducer, useRef } from 'react'
import ScheduleContext from '../contexts/schedulecontext'
import Myreducer from '../reducer/reducer'
import HourManager from './managinghours'


const init = () => {
  
    return JSON.parse(localStorage.getItem('teacherkeys')) || []
  }



const TeacherManager = () =>{

    const [teachers, dispatch] = useReducer(Myreducer, [], init )
    const teacherefs = useRef()
    const materiaref = useRef()
    const turno = useRef()

    const schedulecontext = useContext(ScheduleContext)
    
   

    useEffect(() =>{
        localStorage.setItem('teacherkeys', JSON.stringify(teachers))
     },[teachers])


 const submitaction = (e) =>{

   const newTodo = {
    id: new Date().getTime(),
    name: teacherefs.current.value ,
    materia: materiaref.current.value,
    turno: turno.current.value
   }

   const action = {
       type:'addteacher',
       payload: newTodo
   }

   dispatch(action)

    e.preventDefault()
 }

 const handledelete = ( teacherId) =>{
  const action = {
    type:'delete',
    payload: teacherId
}

dispatch(action)



 }






    return(
        <div>
            <br/>
            <h3 className="center"> Profesores ( {teachers.length} ) </h3>
            <hr/>
 <div className="row center1">

<div className=" col-md-5" >
<div className="card animate__animated animate__pulse">
    <div className="card card-header">
        <h3>Agregar Profesores </h3>
    </div>
    <form onSubmit={submitaction} className="card-body">
        <div className="form-group">
    <input type="text" className="form-control" placeholder="Nombre del profesor?" ref={teacherefs} />
        </div>
        <div className="form-group">
    <input type="text" className="form-control" placeholder="Que materia da el profesor?" ref={materiaref} />
        </div>
        <hr/>
        {/* select */}
        <div className="form-group">
    <input type="text" className="form-control" placeholder="En que turno esta el profesor?" ref={turno} />
        </div>
     
        <div className="form-group">
    <button className="btn btn-block btn-outline-success"  >incluir profesor en la lista <i className="bi bi-person-plus"></i></button>
        </div>
    </form>
</div>

</div>


<div className=" col-md-5 " >

<hr className="hided" />
  {
      teachers.map(teacher => (
        <div name="separatiion br" key={teacher.id}>
        <div className="card animate__animated animate__zoomIn" >
        <div className="card-body">
          <h5 className="card-title center">{teacher.name}</h5>
          <p className="card-text center">{teacher.materia}</p>
{
teacher.turno == 'mañana'  && schedulecontext.horarios.map(schedule => (
  <div className="card animate__animated animate__zoomIn" key={schedule.id}>
    {
      schedule.turno == 'mañana' && 
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
teacher.turno == 'tarde'  && schedulecontext.horarios.map(schedule => (
  <div className="card animate__animated animate__zoomIn" key={schedule.id}>
    {
      schedule.turno == 'tarde' && 
      <div className="card-body"> 
      <h5 className="card-title">turno {schedule.turno}</h5> 
      {
  schedule.horainicio <= moment().format('h') && <p className="alert alert-info">El Profesor esta en clase <i className="bi bi-clock-history"></i></p>
}
{
  schedule.horafinal <= moment().format('h') && <p className="alert alert-danger">La clase ya termino o no ha comenzado <i className="bi bi-clock-fill"></i></p>

}
{
  schedule.horainicio > moment().format('h') && <p className="alert alert-danger">  no ha comenzado <i className="bi bi-clock-fill"></i></p>
}


      <p className="card-text">Comienza a las:{schedule.horainicio}</p>
      <p className="card-text">Termina a las : {schedule.horafinal}</p>
      </div>
    }
  </div>
) )

}
{
teacher.turno == 'noche'  && schedulecontext.horarios.map(schedule => (
  <div className="card animate__animated animate__zoomIn" key={schedule.id}>
    {
      schedule.turno == 'noche' && 
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
          <button className="btn btn-primary" onClick={() => handledelete(teacher.id)} >borrar</button>
        </div>
      </div>
      <br/>
      </div>
    
      ))
  }

 


</div>


 </div>


        </div>
    )
}

export default TeacherManager