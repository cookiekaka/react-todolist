import React from 'react';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';
import LocalDb from 'localdb';

class TodoList extends React.Component {
  constructor() {
    super();
    this.db = new LocalDb('ReactTodoList');
    this.state = {
      todos: this.db.get('todos') || [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.changeTodoState = this.changeTodoState.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.allSelect = this.allSelect.bind(this);
    this.clearDone =this.clearDone.bind(this);
  }

  updateState(newTodos) {
    this.setState({
      todos: newTodos,
    });
    this.db.set('todos', newTodos);
  }

  addTodo(todoText) {
    let newTodos = this.state.todos;
    newTodos.push({
      text: todoText,
      isDone: false
    });
    this.updateState(newTodos);
  }

  changeTodoState(index, checked) {
    let newTodos = this.state.todos;
    newTodos[index].isDone = checked;
    this.updateState(newTodos);
  }

  deleteTodo(index) {
    let newTodos = this.state.todos;
    newTodos.splice(index, 1);
    this.updateState(newTodos);
  }

  allSelect(checked) {
    let newTodos = this.state.todos.map((todo) => {
      todo.isDone = checked;
      return todo;
    });
    this.updateState(newTodos);
  }

  clearDone() {
    let newTodos = this.state.todos.filter((todo) => !todo.isDone)
    this.updateState(newTodos);
  }

  render() {
    return (
      <div className="todo-list">
        <TodoHeader addTodo={this.addTodo} />
        <TodoMain todos={this.state.todos} changeTodoState={this.changeTodoState} deleteTodo={this.deleteTodo} />
        <TodoFooter todos={this.state.todos} allSelect={this.allSelect} clearDone={this.clearDone} />
      </div>
    )
  }
}

export default TodoList;