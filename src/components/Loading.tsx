'use client';

import styled from 'styled-components';
import Typo from '@/components/Typo';

const Loading = () => {
  return (
    <Container>
      <Typo $size={20}>시나브로 이름 짓는 중…</Typo>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
