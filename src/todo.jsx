import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,toggleComplete,deleteTodo } from './todoSlicee';
import './index.css'


const TodoApp = () => {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <div className="container">
      <h1>ToDo App</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className="add-btn" onClick={handleAddTodo}>Add ToDo</button>
  
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.text}</span>
            <div>
              <button
                className={todo.completed ? 'undo-btn' : 'complete-btn'}
                onClick={() => dispatch(toggleComplete(todo.id))}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="delete-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default TodoApp;
