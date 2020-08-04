import React, { Component } from "react";
import axios from "axios";

class Search extends Component {

  state = {
    sortAsc: true,

    employees: [
    {
      id:"",
      picture:"",
      name:"",
      cell:"",
      email:"",
      dob:"",
    }
  ],  
};

  // When the component mounts, get a list of all available base employees
  componentDidMount() {
    this.sortedEmployees
    // axios
    //   .get("https://randomuser.me/api/?results=100")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({
    //       results: response.data.message,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   });
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {

  };


  sortEmployees = (field) => {
    function compareAsc(a, b) {
      if(a[field] > b.[field]) return 1;
      if(b.[field] > a.[field]) return -1;

      return 0
    }

    function compareDesc(a, b) {
      if(a[field] > b.[field]) return -1;
      if(b.[field] > a.[field]) return 1;

      return 0
    }

    if{this.state.sortAsc} {
      const sortedEmployees= this.state.employees.sort(compare);
      this.setState({
        employees: sortedEmployees,
        sortAsc: false
      });
    }else{
      const sortedEmployees= this.state.employees.sort(compare);
      this.setState({
        employees: sortedEmployees,
        sortAsc: true
      });
    };
  };

  render() {
    return ( 
      <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col" onClick={() => {this.sortEmployees("employees.id")}}>
                  <button className="btn btn-dark">ID</button>
                </th>
                <th scope="col">Picture</th>
                <th scope="col" onClick={() => {this.sortEmployees("employees.name")}}>
                  <button className="btn btn-dark">Name</button>
                </th>
                <th scope="col">Cell</th>
                <th scope="col">Email</th>
                <th scope="col" onClick={() => {this.sortEmployees("employees.dob")}}>
                  <button className="btn btn-dark">Age</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => {
                return (
                <tr>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.picture}</td>
                  <td>{employee.name}</td>
                  <td>{employee.cell}</td>
                  <td>{employee.email}</td>
                  <td>{employee.dob}</td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
}

export default Search;
