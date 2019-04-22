import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todo/TodoList';
import Form from './todo/Form';



const testData = [ {id: 0, description: 'Add todo', status: null}
];

class App extends Component {

  state = { todos: testData };

  addTodo = (todo) => {
    todo.id = this.state.todos.length > 0 ? this.state.todos.length + 1 : 0;
    this.setState({ todos: [...this.state.todos, todo]});
  }

  changeStatus = (id) => {
    let index = this.state.todos.findIndex( t => t.id === id)
    let todo = this.state.todos[index];
    todo.status = todo.status == null ? 'done' : null;
    this.setState({ todos: [...this.state.todos]});
  }

  render() {
    return (
     <div className="container">
        <Form onSubmit={this.addTodo}/>
        <TodoList todos={this.state.todos} onChangeStatus={this.changeStatus}/>
     </div>
    );
  }
}

export default App;
