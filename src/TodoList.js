import React, { Component } from 'react';
import TodosItem from './TodosItem';


class TodoList extends Component {

  onDestroy(index) {
    this.props.handleRemove(index)
  }

  render() {
    let filteredArray = []
    if (this.props.filterStatus === 'all') {
      filteredArray = this.props.todos
    }
    if (this.props.filterStatus === 'active') {
      filteredArray = this.props.todos.filter(todo => {
        return todo.completed === false
      })
    }
    if (this.props.filterStatus === 'completed') {
      filteredArray = this.props.todos.filter(todo => {
        return todo.completed === true
      })
    }

    const allTodos = filteredArray.map((todo, i) => {
      return (
            <TodosItem todo={todo.text}
                       todoStatus={todo.completed}
                       index ={i}
                       key={i}
                       onDestroy={() => this.onDestroy(i)}
                       onSaving = {this.props.onUpdate}
                       statusChange = {this.props.filterChange}/>
      )
    })
    return (
        <ul className="todo-list">{allTodos}</ul>
    )
  }
}

export default TodoList;
