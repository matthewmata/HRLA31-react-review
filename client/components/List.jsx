import React, { Component } from 'react';
import ListEntry from './ListEntry.jsx';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    }, () => console.log(this.state.todo))
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.todo]
    }, () => console.log(this.state.todos));
    document.getElementById("form").reset()
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.handleSubmit}>
          <label>
            New todo
            <input type="text" required onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      {this.state.todos.map((todo, index) => <ListEntry todo={todo} key={index}/>)}
      </div>
    )
  }
}