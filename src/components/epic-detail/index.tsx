import React from 'react';
import styled from 'styled-components';
import Header from './header/index';
import StatusColumn from './status-column';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { State } from '@/redux/types';

const EpicDetailWrapper = styled.div`
  background-color: #1e1b4b;
  height: 100vh;
  flex: 4;
`;

export default function EpicDetail() {
  const searchParams = useSearchParams();
  const selectedBoard = searchParams.get('selectedBoard');
  const currentBoardConfig = useSelector((state: State) => {
    return state.boards.find((board) => board.key === selectedBoard);
  });

  const { todo, doing, complete } = currentBoardConfig;
  return (
    <EpicDetailWrapper>
      <Header />
      <div className="flex">
        <StatusColumn status="todo" tasks={todo} />
        <StatusColumn status="doing" tasks={doing} />
        <StatusColumn status="complete" tasks={complete} />
      </div>
    </EpicDetailWrapper>
  );
}
