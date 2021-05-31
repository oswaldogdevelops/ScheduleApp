import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () =>{
    
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" >App de horarios de clase <i className="bi bi-card-checklist"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav navcenter">
        <li className="nav-item">
          <Link className="nav-link active" to="/">  Horarios <i className="bi bi-clock"></i>  </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/teacher">Profesores <i className="bi bi-person-lines-fill"></i></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/search">Buscar <i className="bi bi-search"></i></Link>
        </li>
      </ul>

      
        

    </div>
  </div>
</nav>
    )
}

export default Navbar