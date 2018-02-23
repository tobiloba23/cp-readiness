import React, { Component } from 'react';
import './App.css';
import List from './List';

import logo from './todo_list.jpeg'; 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit} method="get" action="#">
          <div className="row  mb-5">
            <div className="col-12 d-flex justify-content-center">
              <img className="mb-4" src={logo} alt="" width="240" height="135" />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 d-flex justify-content-center">
              <input type="text" value={this.state.term} onChange={this.onChange} className="form-control" required />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <button className="btn btn-lg btn-primary" type="submit" value="Submit">
              Add task to list
            </button>
          </div>
          <p className="mt-5 mb-3 d-flex justify-content-center text-muted">&copy; 2017-2018</p>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
