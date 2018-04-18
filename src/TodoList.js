import React, { Component } from 'react';
import TodosItem from './TodosItem';

class TodoList extends Component {

  onDestroy(index) {
    this.props.handleRemove(index)
  }

  render() {
    const allTodos = this.props.todos.map((todo, i) => {
      return (
            <TodosItem todo={todo}
                       index ={i}
                       key={i}
                       onDestroy={() => this.onDestroy(i)}
                       onSaving = {this.props.onUpdate}/>
      )
    })
    return (
      <ul className="todo-list">{allTodos}</ul>
    )
  }
}

export default TodoList;
