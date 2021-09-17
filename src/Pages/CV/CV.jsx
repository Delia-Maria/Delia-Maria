import React from 'react';
import Education from '../../Components/Education';
import Experience from '../../Components/Experience';
import './CV.css';



const CV = () => {
    return (
        <div className="CV">
            <div className="education">
                <h1>EDUCATION</h1>
                <h4>My Schooling</h4>
                <Education />
            </div>
        
            <div className="experience">
            <h1>EXPERIENCE</h1>
            <h4>Past Roles</h4>
                <Experience />
           
            </div>
        </div>
    )
}
export default CV;