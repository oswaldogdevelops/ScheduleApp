import React, { useEffect, useReducer, useRef } from 'react'
import Myreducer from '../reducer/reducer'

const init = () => {
  
  return JSON.parse(localStorage.getItem('schedulekeys')) || []
}
    

 

const HourManager = () =>{
    const [horarios, dispatch] = useReducer(Myreducer, [], init )
    const turnrefs = useRef()
    const startrefs = useRef()
    const endrefs = useRef()
    
    useEffect(() =>{
       localStorage.setItem('schedulekeys', JSON.stringify(horarios))
    },[horarios])
  
   

 const submitaction = (e) =>{

   if(turnrefs.current.value == 'mañana'){
       const newSchedule = {
        id: new Date().getTime(),
        turno: 'mañana',
        horainicio: startrefs.current.value,
        horafinal: endrefs.current.value
       
       }

const action = {
    type:'addhorario',
    payload: newSchedule
}

dispatch(action)
}




if(turnrefs.current.value == 'tarde'){
    const newSchedule = {
     id: new Date().getTime(),
     turno: 'tarde',
     horainicio: startrefs.current.value,
     horafinal: endrefs.current.value
    }

const action = {
 type:'addhorario',
 payload: newSchedule
}

dispatch(action)

}

if(turnrefs.current.value == 'noche'){
    const newSchedule = {
     id: new Date().getTime(),
     turno: 'noche',
     horainicio: startrefs.current.value,
     horafinal: endrefs.current.value
    }

const action = {
 type:'addhorario',
 payload: newSchedule
}

dispatch(action)

}



    e.preventDefault()
 }

 const handledelete = ( hourId) =>{
    const action = {
      type:'deleteschedule',
      payload: hourId
  }
  
  dispatch(action)
  
  
  
   }
  

 return(
    <div>
        <br/>
        <h3 className="center"><i className="bi bi-alarm"></i> Horarios ( {horarios.length} )</h3>
        <hr/>
<div className="row center1">

<div className="col-md-4 col-md-5 animate__animated animate__pulse" >
<div className="card">
<div className="card card-header">
    <h3>Agregar turno y hora  </h3>
</div>
<form onSubmit={submitaction} className="card-body">
    
    <div className="form-group">
<input type="text" className="form-control" placeholder="añadir turno"  ref={turnrefs} />
    </div>

    <div className="form-group">
<input type="number" className="form-control col-md-2" placeholder="a que hora comienza el turno" ref={startrefs} />
    </div>
    <div className="form-group">
<input type="number" className="form-control col-md-2" placeholder="a que hora termina el turno" ref={endrefs} />
    </div>
    <div className="form-group">
<button className="btn btn-block btn-outline-success" >Agregar horario <i className="bi bi-clock"></i> </button>
    </div>
</form>
</div>

</div>

<div className="col-md-4 col-md-5" >
{
  horarios.map(horario => (
    <div className="card animate__animated animate__zoomIn" key={horario.id}>
    <div className="card-body">
      <h5 className="card-title"> Turno: {horario.turno} </h5>
      <p className="card-text">Comienza a las:{horario.horainicio} </p>
      <p className="card-text">Termina a las :{horario.horafinal} </p>
      <button className="btn btn-danger"  onClick={() => handledelete(horario.id)} >Borrar horario</button>
    </div>
  </div>
  ))
}
</div>


</div>


    </div>
)
}

export default HourManager
