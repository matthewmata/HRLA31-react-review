import React,{Component} from 'react'

class ListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      update: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleConditionalRendering = this.handleConditionalRendering.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state.newTodo))
  }

  handleConditionalRendering() {
    this.setState({ update: !this.state.update });
  }

  render() {
    return(
      <div>
        {!this.state.update ? (
          <div>
            <span>{this.props.index + 1}. {this.props.todo}</span>
            <button onClick={this.handleConditionalRendering}>update</button>
            <button onClick={() => this.props.handleDelete(this.props.index)}>delete</button>
          </div> 
        ) : (
          <div>
            <form onSubmit={(e) => {
              this.props.handleUpdate(e, this.props.index, this.state.newTodo);
              this.handleConditionalRendering();
            }}>
              {this.props.index + 1}.<input type='text' name='newTodo' placeholder={this.props.todo} onChange={this.handleChange}required ></input>
              <input type='submit' value='update'></input>
              <input type='button' value='cancel' onClick={this.handleConditionalRendering}></input>
            </form>
          </div> 
        )}

      </div>

    )
  }
}

export default ListEntry;