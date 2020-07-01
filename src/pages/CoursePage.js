import React, { useState } from 'react';
import Student from "../components/profile";
import Courses from "../components/Courses";
import image from "../assets/images/avatar.jpeg";

import image1 from "../assets/images/html.jpeg";
import image2 from "../assets/images/css.jpg";

import "./coursepage.css";

function CoursePage(){

    const [name] = useState ("JUAN BIANTONG");
    const [status] = useState ("BOOTCAMP STUDENT");
    const [quote] =  useState ("Coding membuat saya belajar bagaimana berpikir")
    const [avatar] = useState (image);

    const courseData = [
        {
            CourseImage : image1,
            courseTitle : "Learn HTML fundamental",
            courseDescription : "Hypertext Markup Language (HTML) adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets (CSS) dan bahasa scripting seperti JavaScript dan VBScript.",
        },
        {
            CourseImage : image2,
            courseTitle : "Learn CSS Fundamental",
            courseDescription : "CSS adalah bahasa style sheet yang digunakan untuk mengatur tampilan dokumen.[2] Dengan adanya CSS memungkinkan kita untuk menampilkan halaman yang sama dengan format yang berbeda.[2]",
        },
    ];
    const CoursesList = courseData.map((courseData) => (
        <Courses
            imgCourse={courseData.CourseImage}
            title={courseData.courseTitle}
            description={courseData.courseDescription}
        />
    ));

    return(
        <div>
            <Student name={name} status={status} quote={quote} avatar={avatar}/>
            <div className="container">{CoursesList}</div>
        </div>
    )
}

export default CoursePage;
