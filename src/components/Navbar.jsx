import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../imges/logo.png'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';

function Navbar() {
const cart  = useSelector(state=>state.cart)
  return (
<nav className="navbar navbar-expand-lg bg-body-light">
  <div className="container-fluid">
    <Link className="navbar-brand " to={"/"}><img src={logo} className="img-fluid rounded-top" alt=""/><span className="one">ca</span><span className="two">KK</span><span className="three">ess</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <DashboardIcon/>
    </button>
    <div className="collapse navbar-collapse w-100 " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Varieties">Varieties</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Footer">Contact us</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='icon' to="/Cart"><i className="bi bi-cart3">({cart.length})</i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
