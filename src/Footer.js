import React, { Component } from 'react';

class Footer extends Component {

  handleClick(filterStatus) {
    this.props.handleFilter(filterStatus)
  }
  render() {
    let count = this.props.todos.length
    return(
      <footer className="footer">
					<span className="todo-count">
						<strong>{count}</strong>  left
					</span>
					<ul className="filters">
						<li>
							<a onClick = {() => {this.handleClick("all")}}
								href="#"
								className= "all">
									All
							</a>
						</li>
						{' '}
						<li>
							<a onClick = {() => {this.handleClick("active")}}
								href="#"
								className="active">
									Active
							</a>
						</li>
						{' '}
						<li>
							<a onClick = {() => {this.handleClick("completed")}}
								href="#"
								className="completed">
									Completed
							</a>
						</li>
					</ul>
				</footer>
    )
  }
}

export default Footer;
