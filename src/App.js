import React from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <PageTemplate>
        <TodoInput/>
        <TodoList/>
      </PageTemplate>
    </div>
  );
}

export default App;
