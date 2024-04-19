import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import Modal from './add-task-modal';

const HeaderWrapper = styled.div`
  height: 100px;
  background-color: #312e81;
  padding: 24px 36px 48px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export default function Header() {
  const searchParams = useSearchParams();
  const selectedBoard = searchParams.get('selectedBoard');
  const currentBoardName = useSelector((state) => {
    return (
      state.boards.find((board) => board.key === selectedBoard)?.label || ''
    );
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HeaderWrapper>
      <div className="pl-4 text-lg font-medium tracking-wide text-white">
        {currentBoardName}
      </div>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        title="+ Add New Task"
      />
      <Modal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />
    </HeaderWrapper>
  );
}
