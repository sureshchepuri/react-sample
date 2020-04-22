import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class BenefitOne extends Component {
  render() {
    return (
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Suresh</td>
            <td>Chepuri</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Venu</td>
            <td>Marripalli</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
    );
  }

}

export default BenefitOne;
