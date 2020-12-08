import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.firstname}
          </li>
          <li>
            <strong>Last Name:</strong> {props.lastname}
          </li>
          <li>
            <strong>Email Address:</strong> {props.email}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;