import React from 'react';
import { TopNavigation } from './AppBar.styled';
import { TaskCounter } from '../Counter/TaskCounter';
import StatusFilter from '../Filter/StatusFilter';
export default function AppBar() {
  return (
    <>
      <TopNavigation>
        <TaskCounter />
        <StatusFilter />
      </TopNavigation>
    </>
  );
}
