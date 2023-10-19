import React from 'react';
import { BtnDelete, InputTask, TextTask, WrapTask } from './Task.styled';
// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Task({ task }) {
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <WrapTask key={task.id}>
      <InputTask
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      <TextTask>{task.text}</TextTask>
      <BtnDelete onClick={handleDelete}>Delete</BtnDelete>
    </WrapTask>
  );
}
