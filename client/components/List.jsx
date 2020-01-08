import React, {Component} from 'react';
import ListEntry from './ListEntry.jsx'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: '',
    }, () => console.log(this.state.todos));
    document.getElementById("todo-form").reset();
  }

  handleDelete(index) {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    })
  }

  handleUpdate(e, index, newTodo) {
    var todos = [...this.state.todos];
    todos.splice(index, 1, newTodo)
    this.setState({ todos })
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id='todo-form'>
          <label>
            Todo:
            <input type='text' name='todo' onChange={this.handleChange}></input> 
          </label>
          <input type='submit' value='submit'></input>
        </form>
        {this.state.todos.map((todo, i) => <ListEntry todo={todo} key={i} index={i} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>)}
      </div>
    )
  }
}

export default List;