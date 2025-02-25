import React, { Component } from "react";
import "./HomePage2.css";
import Dashboard from "./Game/Dashboard";
import ActorB from "./Actor/ActorB";
import BulbTwo from "./Bulb/BulbTwo";
import ExerciseFour from "./Fruit/ExerciseFour";
import Imdb from "./Movies/ImDb";



export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "ImDb", component: <Imdb /> },
        { name: "Dashboard", component: <Dashboard /> },
        { name: "ActorB", component: <ActorB /> },
        { name: "BulbTwo", component: <BulbTwo /> },
        { name: "ExerciseFour", component: <ExerciseFour /> },
      
       
      ],
      selectedProject: null,
    };
  }

  handleProjectClick = (project) => {
    this.setState({ selectedProject: project.component });
  };

  render() {
    return (
      <div className="home-main-container">
        <h1 className="title">React Projects</h1>
        <div className="projects-container">
          {this.state.projects.map((project, index) => (
            <div
              key={index}
              className="project-box"
              onClick={() => this.handleProjectClick(project)}
            >
              {project.name}
            </div>
          ))}
        </div>
        <br />
        {/* Render the selected project below */}
        <div className="project-content">
          {this.state.selectedProject || <p></p>}
        </div>
      </div>
    );
  }
}
