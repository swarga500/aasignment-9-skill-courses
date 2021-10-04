import React from 'react';

const Service = (props) => {
    const {name, Price, img} = props.content;
    return (
        <div>
          <div className="col w-100">
            <div className="card h-100">
                <img width="300px" height="180px" src={img} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <p className="card-title fw-bold"><span className="fw-bold fs-5 text-primary">Course :</span> {name}</p>
                
                 <p className="fw-bold"><span className="fw-bold fs-5 text-primary">Price :</span> ${Price}</p>
             </div>
           </div>
        </div>
        </div>
    );
};

export default Service;