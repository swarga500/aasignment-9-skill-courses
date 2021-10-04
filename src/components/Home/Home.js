import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Home = () => {
    const [contents, setCourses] = useState([])
    useEffect( () => {
        fetch('../../data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    
    return (
        <div className="row row-cols-1 pb-5 mb-5 m-4 row-cols-md-4 g-4">
            
            
            {
                contents.slice(0,4).map(content => <Service key={content.name} content={content}></Service>)
            }
        </div>
    );
};

export default Home;