import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    employees: [{
      id:"",
      picture:"",
      name:"",
      cell:"",
      email:"",
      dob:"",
    }],  
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

  sortEmployeesByName = () => {
    function compare(a, b) {
      if(a.employee_name > b.employee_name) return 1;
      if(b.employee_name > a.employee_name) return -1;

      return 0
    }

    const sortedEmployees= this.state.employees.sort(compare);

    this.setState({
      employees: sortedEmployees,
    });
  };

  render() {
    return ( 
      <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Cell</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
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
