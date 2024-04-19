// import Image from 'next/image';
'use client';

import React, { useEffect } from 'react';
import LeftNav from '@/components/left-nav/index';
import EpicDetail from '@/components/epic-detail';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <LeftNav />
      <EpicDetail />
    </HomeWrapper>
  );
}
