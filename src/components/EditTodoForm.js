import React from 'react';
import styles from './TodoForm.module.css';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = React.useState(task.task);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id);
    setValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button className={styles.button}>Edit task</button>
    </form>
  );
};

export default EditTodoForm;
