'use client';

import styled from 'styled-components';
import Flex from '@/components/Flex';

const NavBar = () => {
  return (
    <Container $justify="center" $gap={{ column: 64 }}>
      <p>인스타</p>
      <p>AFTERDINNERCLUB</p>
      <p>공유버튼</p>
    </Container>
  );
};

export default NavBar;

const Container = styled(Flex)`
  width: 100%;
  background-color: #000;
  color: #fff;

  padding-top: 40px;
  padding-bottom: 20px;

  font-family: 'Arial';
  font-weight: 900;
`;
