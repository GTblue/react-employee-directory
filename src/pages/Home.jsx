import React, { Component } from "react";
import axios from "axios"

class Search extends Component {
  state = {

  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    axios

  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {

  };

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Search;
