import React from 'react';
import LocalDb from '../../bin/localDB';
import style from'./todoList.css';
import TodoHeader from '../../components/TodoHeader/TodoHeader.jsx';
import TodoMain from '../TodoMain/TodoMain.jsx';
import TodoFooter from '../../components/TodoFooter/TodoFooter.jsx';

class TodoList extends React.Component {
  constructor() {
    super();
    this.db = new LocalDb('ReactTodoList');
    this.state = {
      todos: this.db.get('todos') || [],
    };
    this.onAddTodo = this.onAddTodo.bind(this)
  }

  updateState(newTodos) {
    this.setState({
      todos: newTodos,
    });
    this.db.set('todos', newTodos);
  }

  onAddTodo = (todoText) => {
    if(todoText === '') {
      return;
    }
    let newTodos = this.state.todos;
    newTodos.length === 0 && (this.db.set('todoID', 0));
    let id = this.db.get('todoID');
    this.db.set('todoID', ++id);
    newTodos.push({
      id: this.db.get('todoID'),
      text: todoText,
      isDone: false
    });
    this.updateState(newTodos);
  }

  changeTodoState = (id, checked) => {
    let newTodos = this.state.todos;
    newTodos.forEach((todo) => {
      todo.id === id && (todo.isDone = checked);
    });
    this.updateState(newTodos);
  }

  onDelete = (id) => {
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.updateState(newTodos);
  }

  onAllSelect = (checked) => {
    let newTodos = this.state.todos.map((todo) => {
      todo.isDone = checked;
      return todo;
    });
    this.updateState(newTodos);
  }

  onClearDone = () => {
    let newTodos = this.state.todos.filter((todo) => !todo.isDone)
    this.updateState(newTodos);
  }

  render() {
    return (
      <div className={style.list}>
        <TodoHeader onAddTodo={this.onAddTodo} />
        <TodoMain todos={this.state.todos} changeTodoState={this.changeTodoState} onDelete={this.onDelete} />
        <TodoFooter todos={this.state.todos} onAllSelect={this.onAllSelect} onClearDone={this.onClearDone} />
      </div>
    )
  }
}

export default TodoList;