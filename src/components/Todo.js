import React from 'react';
import styles from './Todo.module.css';

const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
  const handleClick = () => {
    toggleCompleted(task.id);
  };

  return (
    <section className={styles.todo}>
      <p
        onClick={handleClick}
        className={`${task.isCompleted ? styles.completed : ''}`}
      >
        {task.task}
      </p>
      <div className={styles.buttonWrapper}>
        <button onClick={() => editTodo(task.id)}>Edit</button>
        <button onClick={() => deleteTodo(task.id)}>Delete</button>
      </div>
    </section>
  );
};

export default Todo;
