import React, { useState } from 'react';
import styled from 'styled-components';
import TaskModal from './task-modal';

const ItemWrapper = styled.div`
  padding: 12px;
  background-color: #818cf8;
  margin-top: 8px;
  board-radius: 16px;
  &:hover {
    background-color: #4f46e5;
  }
`;

export default function TaskItem({
  label,
  status,
  taskKey,
}: {
  label: string;
  status: String;
  taskKey: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <ItemWrapper onClick={() => setIsModalOpen(true)}>{label}</ItemWrapper>
      <TaskModal
        taskKey={taskKey}
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
        taskName={label}
        taskStatus={status}
      />
    </div>
  );
}
