import React from 'react';
import styles from './TodoWrapper.module.css';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, isEditing: false, isCompleted: false },
    ]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  console.log(todos);

  return (
    <section className={styles.wrapper}>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} task={todo} editTodo={editTask} />
        ) : (
          <Todo
            toggleCompleted={toggleCompleted}
            key={index}
            task={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ),
      )}
    </section>
  );
};

export default TodoWrapper;
