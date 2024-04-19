import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  background-color: #1d4ed8;
  padding: 16px;
  border-radius: 16px;
  width: auto;
  height: 48;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Button({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return <ButtonWrapper onClick={onClick}>{title}</ButtonWrapper>;
}
