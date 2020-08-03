import React, { Component } from "react";
import axios from "axios"

class Search extends Component {
  state = {

  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        console.log(response.data);
        this.setState({
          results: response.data.message,
        });
      })
      .catch((err) => {
        console.log(err)
      });
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
