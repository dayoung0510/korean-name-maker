'use client';

import styled from 'styled-components';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';

const NavBar = () => {
  return (
    <Container $justify="center" $gap={{ column: 64 }}>
      <IconWrapper>
        <Icon size={24} name="insta" />
      </IconWrapper>

      <p>AFTERDINNERCLUB</p>

      <IconWrapper>
        <Icon size={24} name="share" />
      </IconWrapper>
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
const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
