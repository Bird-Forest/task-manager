import React from 'react';
// Імпортуємо об'єкт значень фільтра

import {
  WrapFilter,
  BtnAll,
  BtnActive,
  BtnCompleted,
  WrapBtn,
  TitleFilter,
} from './StatusFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from '../../redux/constants';
// Імпортуємо генератор екшену
import { setStatusFilter } from '../../redux/actions';

export default function StatusFilter() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.statusFilter);
  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div>
      <WrapFilter>
        <TitleFilter>Filter by status</TitleFilter>
        <WrapBtn>
          <BtnAll
            selected={filter === statusFilters.all}
            onClick={() => handleFilterChange(statusFilters.all)}
          >
            All
          </BtnAll>
          <BtnActive
            selected={filter === statusFilters.active}
            onClick={() => handleFilterChange(statusFilters.active)}
          >
            Active
          </BtnActive>
          <BtnCompleted
            selected={filter === statusFilters.completed}
            onClick={() => handleFilterChange(statusFilters.completed)}
          >
            Ended
          </BtnCompleted>
        </WrapBtn>
      </WrapFilter>
    </div>
  );
}
