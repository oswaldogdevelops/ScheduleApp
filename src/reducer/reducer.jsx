import React from 'react'

const Myreducer = (state = [] ,action) =>{
  switch(action.type){
    case 'addteacher':
        return [...state, action.payload]
    case 'addhorario':
        return [...state, action.payload]
      case 'delete':
        return state.filter( teacher => teacher.id !== action.payload )
        case 'deleteschedule':
          return state.filter( schedule => schedule.id !== action.payload )
       
default: 
     return state

  }


}

export default Myreducer