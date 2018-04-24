import React, { Component } from 'react';
import Head from './Head';
import Input from './Input';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
          todoItems: [],
          filterStatus: 'all'
        }
    this.handleKey = this.handleKey.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.filterChange = this.filterChange.bind(this)

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
      if (i !== index) {
        return todo
      }
      return val
    })
    this.setState({todoItems: editValue})
  }

  handleFilter(filterStatus) {
    this.setState({filterStatus: filterStatus })
  }
  filterChange(todoState, index){
    let filterValue = this.state.todoItems.map((todo, i) => {
      if (i !== index) {
        return todo
      }
      return todoState
    })
    this.setState({todoItems: filterValue})
  }
  render() {
    return (
      <div className="todoapp">
					<header className="header">
            <Head />
            <Input handleKey={this.handleKey} />
					</header>
          <TodoList todos = { this.state.todoItems }
                    filterStatus= {this.state.filterStatus}
                    handleRemove= {this.handleRemove}
                    onUpdate={this.onUpdate}
                    filterChange= {this.filterChange}/>
          {this.state.todoItems.length > 0 ?
          <Footer handleFilter ={this.handleFilter}
          todos = { this.state.todoItems }/> : null }
			</div>
    );
  }
}

export default App;
