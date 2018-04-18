import React, { Component } from 'react';


class Input extends Component {
  constructor(props){
    super(props)

    this.state = {
          newTodo: ''
        }
  }

  handleText(event) {
    this.setState({newTodo: event.target.value});
  }

  handleEnter(e) {
    if (e.keyCode !== 13) {
      return;
    }
    const val = this.state.newTodo;
    this.props.handleKey(val)
    this.setState({newTodo: ''})
  }

  render() {
    return (
						<input
							className="new-todo"
							placeholder="What needs to be done?"
							autoFocus={true}
              value={this.state.newTodo}
              onChange={(event) => this.handleText(event)}
              onKeyDown={(e) => this.handleEnter(e)}
						/>
    );
  }
}

export default Input;
