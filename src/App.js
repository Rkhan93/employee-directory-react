import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeEmployees = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Search for an Employee</Title>
        <searchName/>
        <searchEmail/>


        
        
        {this.state.employees.map(employee => (
          <FriendCard
            removeEmployees={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            firstname={employee.firstname}
            lastname={employee.lastname}
            email={employee.email}
            image={employee.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
