import React, { Component } from "react";
import "./HomePage2.css";
import Dashboard from "./Game/Dashboard";
import Actor from "./Actor/Actor"
import BulbTwo from "./Bulb/BulbTwo";
import Fruit from "./Fruit/Fruit"
import Imdb from "./Movies/ImDb";
import TableTwo from "./TableTwo";
import Amazon from "./Amazon/Amazon"




export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
       
        { name: "Dashboard", component: <Dashboard /> },
        { name: "Actor", component: <Actor/> },
        { name: "BulbTwo", component: <BulbTwo /> },
        { name: "Fruit", component: <Fruit /> },
        { name: "ImDb", component: <Imdb /> },
        { name: "TableTwo", component: <TableTwo/> },
        { name: "Amazon", component: <Amazon/> },
       
      
       
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
