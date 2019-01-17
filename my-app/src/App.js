import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state ={items: []};
  }
  componentDidMount() {
    axios.get('http://localhost:3005/regist')
     .then(response => {
      console.log(response.data);
       this.setState({ items: response.data });
     })
     .catch(function (error) {
       console.log(error);
     })
    }

  render() {
    return (
      <div className="App">
        <h1>Regist List</h1>
          <div>
            <table className="table table-hover" align="center">
              <thead>
                <tr>
                    <th width="3%">ID</th>
                    <th width="20%">First Name</th>
                    <th width="20%">Last Name</th>
                    <th width="20%">Address</th>
                    <th width="10%">Unit</th>
                    <th width="20%">Zip Code</th>
                </tr>
              </thead>
                <tbody>
                {this.state.items.map(item =>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.unit}</td>
                  <td>{item.zipCode}</td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default App;
