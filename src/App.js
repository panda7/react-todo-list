import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 공부하기', done: true },
      { id: 1, text: '컴포넌트 스타일링 해보기', done: false }
    ]
  }

  id = 1;
  getId = () => {
    return ++this.id;
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  handleInsert = () => {
    const { todos, input } = this.state;

    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    };

    this.setState({
      todos: [...todos, newTodo],
      input: ''
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleInsert
    } = this;

    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
        <TodoList todos={todos} />
      </PageTemplate>
    );

  }
}

export default App;