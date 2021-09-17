import React from "react";
import descriptionImage from '../../images/mac.jpeg';
import projectImage1 from '../../images/shop.png';
import projectImage2 from '../../images/todo.webp';
import './Project.css';

const Project = () => {
    return (
        <div className="project-all">
            <div className="wallpaper-all-project-description">
                <div className="project-description">
                    <h1>PROJECT DONE</h1>
                    <p>Though I have learned a lot from being in the professional world,
                        some of my skills have been built from research,
                        observation and common sense.
                        I know that to be truly successful in my career,
                        I need to be able to work with people,
                        find innovative solutions to professional problems and make contributions that really matter.
                        I would be thrilled for any opportunity to keep building on my skill set.
                        Let’s discuss what I can offer you. Get in touch today.</p>
                </div>
            </div>
            <div className="container-grid">
                <div className="shop-app">
                    <div className="app-heading">
                        <h3>MY SHOP APP</h3>
                        <p>Single page App. React-JS, HTML, CSS.</p>
                        <p>This project is about a marketing website where people can buy different products from accesories to clothes.</p>
                        <a href="https://github.com/Delia-Maria/SIIT_Delia_Danut/tree/main/15_week_homework/react"> Check out my project on Github!</a>
                    </div>
                    <div className="project-image">
                        <img src={projectImage1} width="250" height="250" ></img>
                    </div>
                </div>
                <div className="toDo-app">
                    <div className="app-heading">
                        <h3>TO DO APP</h3>
                        <p>Single page App. React-JS, HTML, CSS.</p>
                        <p>The purpose of this project was to practice CRUD (create, read, update, delete) using fetch data from server.</p>
                        <a href="https://github.com/Delia-Maria/SIIT_Delia_Danut/tree/main/15_week_homework/react"> Check out my project on Github!</a>
                    </div>
                    <div className="project-image">
                        <img src={projectImage2} width="250" height="200"></img>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Project;
