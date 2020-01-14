import React, { Component } from 'react';
import List from './List.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        {this.props.first === this.state.first && this.props.last === this.state.last ? (
          <List />
        ): (
          <form>
            <label>
              First Name:
              <input name="first" onChange={(e) => this.handleChange(e)} type="text"></input>
            </label>
            <label>
              Last Name:
              <input name="last" onChange={(e) => this.handleChange(e)} type="text"></input>
            </label>
          </form>
        )}
      </div>
    )
  }
}
