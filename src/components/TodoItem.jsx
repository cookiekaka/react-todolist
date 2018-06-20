import React from 'react';

class TodoItem extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick  =this.handleClick.bind(this);
  }

  handleChange(e) {
    this.props.changeTodoState(this.props.index, e.target.checked);
  }

  handleClick() {
    this.props.deleteTodo(this.props.index);
  }

  render() {
    return (
      <li>
        <label>
          <input type="checkbox" checked={this.props.todo.isDone} onChange={this.handleChange}/>
          <span>{this.props.todo.text}</span>
        </label>
        <button onClick={this.handleClick}>删除</button>
      </li>
    )
  }
}

export default TodoItem;