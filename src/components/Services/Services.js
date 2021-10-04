import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [contents, setContent] = useState([]);
    useEffect( () => {
        fetch('../../data.JSON')
        .then(res => res.json())
        .then(data => setContent(data))
    }, [])
    return (
        <div className="row row-cols-1 mb-5 pb-5 m-4 row-cols-md-4 g-4">
            {
                contents.map(content => <Service 
                    key={content.name}
                    content ={content}
                ></Service>)
            }
        </div>
    );
};

export default Services;