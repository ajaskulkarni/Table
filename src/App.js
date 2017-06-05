import React, { Component } from 'react';
import Reactable from 'reactable';

var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;

//======================
// Define our table's data
// Imagine using information acquired from 
// a database, like list of users
//======================
var sgTeams = [
  {name: "abc", email: "abc@gmail.com", ph: 5714449991},
  {name: "efg", email: "efg@gmail.com", ph: 5714449992},
  {name: "ghi", email: "ghi@gmail.com", ph: 5714449993},
  {name: "jkl", email: "jkl@gmail.com", ph: 5714449994},
  {name: "mno", email: "mno@gmail.com", ph: 5714449995},
  {name: "xyz", email: "xyz@gmail.com", ph: 5714449996},
];

export default class SgTeamsList extends Component {


//======================
// Render the table with all of the
// options included
//======================
  renderTable() {
    return (
      <Table className="table"
        filterable={['name','email','ph']}
        noDataText="No matching records found"
        itemsPerPage={5}
        currentPage={0}
        sortable={true}
        data={sgTeams}>
        <Thead>
          <Th column="name">Name</Th>
          <Th column="email">E-mail address</Th>
          <Th column="ph">Phone number</Th>
        </Thead>
      </Table>
    )
  }


//======================
// Render our component
//======================

  render() {
      return (
        <div>
          {this.renderTable()}
        </div>
      )
  }
}