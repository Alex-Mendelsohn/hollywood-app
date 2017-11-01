import React, { Component } from "react";
import api from "../api";
class CreateMovie extends Component {
  constructor() {
    super();

    this.state = {
      movie: {}
    };
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        movie: {
          ...state.movie,
          [changeEvent.target.name]: changeEvent.target.value
        }
      };
    });
  };

  onFromSubmit = submitEvent => {
    submitEvent.preventDefault();

    api.movies
      .create(this.state.movie)
      .then(() => this.props.history.push("/movies"));
  };
  render() {
    return (
      <div>
        <h1>Create Movie</h1>
        <form onSubmit={this.onFromSubmit}>
          <input
            onChange={this.onInputChange}
            name={"title"}
            placeholder={"Title"}
            type="text"
          />
          <input
            onChange={this.onInputChange}
            name={"rating"}
            placeholder={"Rating"}
            type="text"
          />
          <input
            onChange={this.onInputChange}
            min={0}
            max={100}
            name={"rottenTomatoes"}
            placeholder={"RottenTomatoes"}
            type="number"
          />
          <input
            onChange={this.onInputChange}
            name={"poster"}
            placeholder={"Poster"}
            type="text"
          />
          <input
            onChange={this.onInputChange}
            name={"summary"}
            placeholder={"Summary"}
            type="text"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateMovie;
