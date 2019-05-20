import React, { Component } from "react";
import TodoItem from "../TodoItem";

class TodoList extends Component {
  // static defaultProps = {
  //   todos: [],
  //   onToggle: () => console.warn("onToggle not defined"),
  //   onRemove: () => console.warn("onRemove not defined")
  // };
  /**
   * 최적화 진행. todos props 가 바뀔 때만 리렌더링 되도록 처리
   */
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map((todo) => (
      <TodoItem
        key={todo.get("id")}
        done={todo.get("done")}
        onToggle={() => onToggle(todo.get("id"))}
        onRemove={() => onRemove(todo.get("id"))}
      >
        {todo.get("text")}
      </TodoItem>
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoList;
