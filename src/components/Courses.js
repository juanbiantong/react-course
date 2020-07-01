
import React from "react";
import "./course.css"
function Courses(props) {
    return (
        <div className="course-box">
            <div>
                <img src={props.imgCourse} width="150PX" alt="gambar" />
            </div>
            <div >
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Courses;