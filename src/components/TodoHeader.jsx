import React from 'react';

class TodoHeader extends React.Component {
  handleKeyUp = (e) => {
    if(e.keyCode === 13) {
      this.props.addTodo(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入任务，按回车确认" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}

export default TodoHeader;