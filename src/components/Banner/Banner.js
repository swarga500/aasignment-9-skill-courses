import React from 'react';

const Banner = () => {
    return (
        <div className="row border row-cols-1 pb-5 row-cols-md-2 bg-light align-items-center g-4 my-2">
            <div className="text-start ps-5">
                <h3 className="text-primary fw-bold">Always something new to learn</h3>
                <h5 className="text-secondary fw-bold">Be Patience,<br />
                    More Practice and <br />
                    Get Rewards
                </h5>
            </div>
            <div>
            <img width="330px" height="150px" src="https://i.ibb.co/cL2L7Sk/skill.jpg" alt="skill" border="0" />
            </div>
        </div>
    );
};

export default Banner;