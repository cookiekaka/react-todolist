import React from 'react';
import style from './todoFooter.css'

class TodoFooter extends React.Component {
  handleChange = (e) => {
    this.props.onAllSelect(e.target.checked);
  }

  handleClick = () => {
    this.props.onClearDone();
  }

  render() {
    let doneCount = this.props.todos.filter((todo) => todo.isDone).length;
    let todosAmount = this.props.todos.length;

    return (
      <div>
        <label className={style.label}>
          <input className={style.input} type="checkbox" onChange={this.handleChange} />
          <span>全选</span>
        </label>
        <span className={style.info}>
          <span className={style.done}>已完成{doneCount}</span>
          <span>/全部{todosAmount}</span>
        </span>
        <button className={style.button} onClick={this.handleClick}>清除已完成任务</button>
      </div>
    )
  }
}

export default TodoFooter;