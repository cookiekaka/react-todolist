import React from 'react';

class TodoFooter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.props.allSelect(e.target.checked);
  }

  handleClick() {
    this.props.clearDone();
  }

  render() {
    let doneCount = this.props.todos.filter((todo) => todo.isDone).length;
    let todosAmount = this.props.todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={this.props.isAllCheck} onChange={this.handleChange} />
          <span>全选</span>
        </label>
        <span className="footer-info">
          <span className="done-count">已完成{doneCount}</span>
          <span>/全部{todosAmount}</span>
        </span>
        <button onClick={this.handleClick}>清除已完成任务</button>
      </div>
    )
  }
}

export default TodoFooter;