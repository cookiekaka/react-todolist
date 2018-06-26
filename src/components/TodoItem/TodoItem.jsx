import React from 'react';
import style from './todoItem.css'

class TodoItem extends React.Component {
  handleChange = (e) => {
    this.props.changeTodoState(this.props.todo.id, e.target.checked);
  }

  handleClick = () => {
    this.props.onDelete(this.props.todo.id);
  }

  render() {
    const props = this.props;
    return (
      <li className={style.li}>
        <label className={style.label}>
          <input className={style.input} type="checkbox" checked={props.todo.isDone} onChange={this.handleChange}/>
          <span className={style.span}>{props.todo.text}</span>
        </label>
        <button className={style.button} onClick={this.handleClick}>删除</button>
      </li>
    )
  }
}

export default TodoItem;