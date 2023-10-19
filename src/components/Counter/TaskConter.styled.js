import styled from 'styled-components';

export const WrapCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 200px;
  /* height: 60px; */
`;
export const TitleCounter = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: black;
  padding: 0;
  margin: 0;
`;
export const Counter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 200px;
  height: 50px;
`;
export const Active = styled.p`
  display: flex;
  gap: 10px;
  font-size: 16px;
  padding: 0;
  margin: 0;
`;
export const Completed = styled.p`
  display: flex;
  gap: 10px;
  font-size: 16px;
  padding: 0;
  margin: 0;
`;
