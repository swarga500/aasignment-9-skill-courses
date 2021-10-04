import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  bg-secondary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        {/* route Link  */}
        <Link className="text-white fw-bold nav-link active" aria-current="page" to="/Home">Home</Link>
        <Link className="text-white fw-bold nav-link" to="/services">Services</Link>
        <Link className="text-white fw-bold nav-link" to="/contact">Contact</Link>
        <Link className="nav-link text-white fw-bold" to="/about" >About</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;