import styled from 'styled-components';
export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 200px;
`;
export const TitleFilter = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: black;
  padding: 0;
  margin: 0;
`;
export const WrapBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: 50px;
  padding: 0;
  margin: 0;
`;
export const BtnAll = styled.button`
  display: inline-block;
  width: 60px;
  height: 50px;
  font-size: 12px;
  background-color: yellow;

  color: black;
`;
export const BtnActive = styled.button`
  display: inline-block;
  width: 60px;
  height: 50px;
  font-size: 12px;
  background-color: red;
  color: black;
`;
export const BtnCompleted = styled.button`
  display: inline-block;
  width: 60px;
  height: 50px;
  font-size: 12px;
  background-color: blue;
  color: black;
`;
