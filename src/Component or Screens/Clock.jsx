import React, { useEffect, useRef, useState } from 'react'

const Clock = () => {

 const [Hour, setHour] = useState()
  setInterval(() => {
      setHour(moment().format('h:mm a'))
  }, 1000);

return(
    <div className="center">
     <br/>
     <div className="col-md-3 animate__animated animate__pulse"  >
     <div className="card">
      <div className=" card-header">
          <h1 className="card-title"> 
          {
             Hour
          }

     </h1>
      </div>
     </div>
     </div>

    </div>
)
}

export default Clock