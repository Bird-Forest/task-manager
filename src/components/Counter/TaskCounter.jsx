import React from 'react';
import {
  Active,
  Completed,
  Counter,
  TitleCounter,
  WrapCounter,
} from './TaskConter.styled';
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks);
  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <WrapCounter>
      <TitleCounter>Tasks</TitleCounter>
      <Counter>
        <Active>Active: {count.active}</Active>
        <Completed>Completed: {count.completed}</Completed>
      </Counter>
    </WrapCounter>
  );
};
