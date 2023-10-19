import React from 'react';
import { BtnForm, FormTask, InputForm, WrapForm } from './TaskForm.styled';
// Імпортуємо генератор екшену
import { addTask } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function TaskForm() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));

    form.reset();
  };
  return (
    <WrapForm>
      <FormTask onSubmit={handleSubmit}>
        <InputForm type="text" name="text" placeholder="Enter task text..." />
        <BtnForm type="submit">Add task</BtnForm>
      </FormTask>
    </WrapForm>
  );
}
