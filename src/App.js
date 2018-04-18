import React, { Component } from 'react';
import Head from './Head';
import Input from './Input';
import TodoList from './TodoList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
          todoItems: []
        }
    this.handleKey = this.handleKey.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
  }

  handleKey(val) {
    const newArray = this.state.todoItems.slice();
    newArray.push(val);
    this.setState({todoItems: newArray});
  }

  handleRemove(index) {
    const filtered = this.state.todoItems.filter( (todo, i) => {
      if ( i !== index) {
        return todo
      }
      return null;
    });
    this.setState({todoItems: filtered})
  }

  onUpdate(val, index, oldValue) {
    let editValue = this.state.todoItems.map((todo, i) => {
      return  todo === oldValue ? val : todo
    })
    this.setState({todoItems: editValue})
  }

  render() {
    return (
      <div className="todoapp">
					<header className="header">
            <Head />
            <Input handleKey={this.handleKey} />
					</header>
          <TodoList todos = { this.state.todoItems }
                    handleRemove= {this.handleRemove}
                    onUpdate={this.onUpdate}/>
			</div>
    );
  }
}

export default App;
