import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
// 6.
import { toggleTodo } from "../redux/actions";

//2.
//4.
const Todo = ({ todo, 
    //6.
    //7.
    toggleTodo 
}) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
    // 3.
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

// export default Todo;
// 7.
// 8.
export default connect(
  null,
  { toggleTodo }
)(Todo);