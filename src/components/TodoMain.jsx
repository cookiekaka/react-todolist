import React from 'react';
import TodoItem from './TodoItem';

class TodoMain extends React.Component {
  render() {
    let itemEvent = {
      changeTodoState: this.props.changeTodoState,
      deleteTodo: this.props.deleteTodo
    };

    if(this.props.todos.length === 0) {
      return (
        <div className="todo-main">
          <li>恭喜完成所有任务！</li>
        </div>
      )
    } else {
      return (
        <div className="todo-main">
          {
            this.props.todos.map((todo, index) => <TodoItem todo={todo} key={index} index={index} {...itemEvent} />)
          }
        </div>
      )
    } 
  }
}

export default TodoMain;