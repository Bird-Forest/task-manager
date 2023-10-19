import Task from 'components/Task/Task';
import React from 'react';
import { WrapList } from './TaskList.styled';
import { statusFilters } from '../../redux/constants';
import { useSelector } from 'react-redux';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export default function TaskList() {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(state => state.filters.status);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <WrapList>
      {visibleTasks.map(task => (
        // <ListItem key={task.id}>
        <Task task={task} />
        // </ListItem>
      ))}
    </WrapList>
  );
}
