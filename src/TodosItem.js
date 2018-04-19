import React, { Component } from 'react';


class TodosItem extends Component {
  constructor(props){
    super(props)
    this.state = {
          isEditing: false,
          editText: this.props.todo,
          completed: false,
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
    this.props.onSaving(this.state.editText, index, oldValue)
    this.setState({isEditing: false})
  }
  handleSubmit(event, index, oldValue) {
    let val = event.target.value
    if (val) {
      this.props.onSaving(this.state.editText, index, oldValue)
      this.setState({isEditing: false})
    }
  }
  onToggle() {
    this.setState({completed: !this.state.completed})
  }
  render() {
    const index = this.props.index
    const oldValue = this.props.todo
    return (
      <li className={this.state.completed ? this.state.className : null}>
        {!this.state.isEditing && <div className="view">
           <label onDoubleClick={this.handleEdit}>{this.props.todo}</label>
           <button className="destroy" onClick={this.props.onDestroy}/>
            <input className="toggle" type="checkbox"
  							checked={this.state.completed} onChange={this.onToggle}/>
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
