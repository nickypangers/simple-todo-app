import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodoList';
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true,
            }
        ]
    }
    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };
    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };
    addTodoItem = title => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
      };
    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} delTodoProps={this.delTodo} />
            </div>
        );
    }
}

export default TodoContainer;