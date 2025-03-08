import React from "react";
import "./ImDb.css";
import {Header} from "./Header";
import Panel from "./Panel";
import Form from "./Form";

export default class Imdb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         movieArray: [],
         showForm: false,
        }
    }
    // function show form
    openForm = () => {
       this.setState({ showForm: !this.state.showForm })
    };

    // function 
    addMovies = (movie) => {
        console.log("Added movie:",movie)
        this.setState((prev) => ({
                movieArray: [movie, ...prev.movieArray],
                showForm: false,
        }));
    };
    render() {
        return (
            <div className="app-two">
                <Header openForm = {this.openForm} />
                {this.state.showForm? (
                      <Form addMovie={this.addMovies} />
                ):(
                <Panel movieArray={this.state.movieArray} />)
                }
                 
            </div>
        );
    }
}
