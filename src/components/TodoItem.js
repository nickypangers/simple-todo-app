import React from "react";

const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
}

class TodoItem extends React.Component {
    render() {

        const { completed, id, title } = this.props.todo;
        return <li className="todo-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => this.props.handleChangeProps(id)}
            />
            <button onClick={() => this.props.delTodoProps(id)}>
                Delete
            </button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </li>

    }
}

export default TodoItem