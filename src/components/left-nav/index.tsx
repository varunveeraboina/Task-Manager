'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from './button';
import { useSelector } from 'react-redux';
import CreateBoardModal from './create-board-modal';
import { useSearchParams } from 'next/navigation';

const LeftNavContainer = styled.div`
  background-color: #3730a3;
  height: 100vh;
  flex: 1;
  padding: 32px 0px;
`;

export default function LeftNav() {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState();
  const selectedBoard = searchParams.get('selectedBoard');
  const boards = useSelector((state) => {
    return state.boards.reduce((acc, current) => {
      return [...acc, { key: current.key, label: current.label }];
    }, []);
  });

  console.log(boards);

  return (
    <LeftNavContainer>
      {/* <Image
        src="https://fonts.gstatic.com/s/i/materialicons/google/v22/24px.svg?download=true
"
        // style={{ width: 48, height: 48 }}
        width={48}
        height={48}
        alt="Company Icon"
      /> */}
      <div className="pl-4 text-lg font-bold tracking-wide text-white">
        Kanban
      </div>
      <div className="mt-16 pl-4 text-sm font-thin tracking-widest text-gray-200">
        ALL BOARDS ({boards.length})
      </div>
      {/* <Button title={board} />
      <Button title="Marketing Plan" />
      <Button title="Road Map" /> */}
      {boards.map((item) => {
        return (
          <Button
            active={selectedBoard === item.key}
            // active={true}
            title={item.label}
            key={item.key}
            id={item.key}
          />
        );
      })}
      <div
        className="text-violet-300 ml-4 hover:text-white mt-24"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        + Create New Board
      </div>
      <CreateBoardModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />
    </LeftNavContainer>
  );
}
