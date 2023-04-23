import React from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo, props }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="What's your task?"
        value={value}
        onChange={handleChange}
      />
      <button className={styles.button}>Send</button>
    </form>
  );
};

export default TodoForm;
