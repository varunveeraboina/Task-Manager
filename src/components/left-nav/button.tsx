'use client';

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const ButtonWrapper = styled.div`
  background-color: ${(props) => (props.active ? '#1d4ed8' : '')};
  padding: 12px 0px 12px 24px;
  margin-right: 24px;
  border-radius: 0 16px 16px 0;
  margin-top: 8px;
`;
export default function Button({
  title,
  id,
  active,
}: {
  title: string;
  id: string;
  active: boolean;
}) {
  const router = useRouter();
  const pathName = usePathname();

  console.log('router', router);
  return (
    <ButtonWrapper
      active={active}
      onClick={() => {
        router.push(pathName + `?selectedBoard=${id}`);
      }}
    >
      {title}
    </ButtonWrapper>
  );
}
