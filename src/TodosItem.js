import React, { Component } from 'react';


class TodosItem extends Component {
  constructor(props){
    super(props)
    this.state = {
          isEditing: false,
          editText: this.props.todo,
          className: 'completed',
          classNameEdit: 'editing'
        }
    this.handleEdit = this.handleEdit.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }

  handleEdit() {
      this.setState({isEditing: true})
  }

  handleChange(e) {
    this.setState({editText: e.target.value})
  }

  handleKeyDown(event, index, oldValue) {
    if (event.keyCode === 27) {
      this.setState({isEditing: false})
    }
    if (event.keyCode !== 13 ) {
      return;
    }
    const val = {text: event.target.value, completed: this.props.todoStatus}
    this.props.onSaving(val, index, oldValue)
    this.setState({isEditing: false})
  }
  handleSubmit(event, index, oldValue) {
    const val = {text: event.target.value, completed: this.props.todoStatus}
    if (val) {
      this.props.onSaving(val, index, oldValue)
      this.setState({isEditing: false})
    }
  }
  onToggle() {
    const todoState = {text: this.props.todo, completed: !this.props.todoStatus}
    this.props.statusChange(todoState, this.props.index)
  }

  render() {
    const index = this.props.index
    const oldValue = this.props.todo
    return (
      <li className={this.props.todoStatus ? this.state.className : null}>
        {!this.state.isEditing && <div className="view">
           <label onDoubleClick={this.handleEdit}>{this.props.todo}</label>
           <button className="destroy" onClick={this.props.onDestroy}/>
            <input className="toggle" type="checkbox"
  							checked={this.props.todoStatus} onChange={this.onToggle}/>
              </div>}
            {this.state.isEditing && <input className="edit" autoFocus= {true}
						value={this.state.editText}
						onChange={(e) =>this.handleChange(e)}
						onKeyDown={(event) => this.handleKeyDown(event, index, oldValue)}
            onBlur= {(event) => this.handleSubmit(event, index, oldValue)}
					/>}
      </li>
    )
  }
}

export default TodosItem;
