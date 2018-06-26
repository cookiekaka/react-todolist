import React from 'react';
import style from './todoMain.css';
import TodoItem from '../../components/TodoItem/TodoItem.jsx';

class TodoMain extends React.Component {
  render() {
    let itemEvent = {
      changeTodoState: this.props.changeTodoState,
      onDelete: this.props.onDelete
    };

    if(this.props.todos.length === 0) {
      return (
        <div>
          <li className={style.li}>恭喜完成所有任务！</li>
        </div>
      )
    } else {
      return (
        <div>
          {
            this.props.todos.map((todo) => <TodoItem todo={todo} key={todo.id} index={todo.id} {...itemEvent} />)
          }
        </div>
      )
    } 
  }
}

export default TodoMain;