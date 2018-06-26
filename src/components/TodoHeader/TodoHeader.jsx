import React from 'react';
import style from './todoHeader.css'

class TodoHeader extends React.Component {
  handleKeyUp = (e) => {
    if(e.keyCode === 13) {
      this.props.onAddTodo(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input className={style.input} type="text" placeholder="请输入任务，按回车确认" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}

export default TodoHeader;