import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <h1 className="fw-bold text-primary  my-3">Skill Hunter</h1>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;