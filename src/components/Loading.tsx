'use client';

import styled from 'styled-components';
import Typo from '@/components/Typo';
import { useEffect, useState } from 'react';

const Loading = () => {
  // 마침표 개수를 저장할 상태
  const [dots, setDots] = useState(1);

  useEffect(() => {
    // 0.5초마다 dots 개수를 변경하는 타이머
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots % 3) + 1); // 1 -> 2 -> 3 -> 1 순환
    }, 500);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Typo $size={20}>시나브로 이름 짓는 중 {'.'.repeat(dots)}</Typo>
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
