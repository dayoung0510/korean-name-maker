'use client';

import styled from 'styled-components';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentUrl = `${
    window.location.origin
  }${pathname}?${searchParams.toString()}`;

  const share = () => {
    navigator.share({
      title: '우리말 이름 짓기',
      url: currentUrl,
    });
  };

  return (
    <Container $justify="center" $gap={{ column: 64 }}>
      <IconWrapper>
        <Icon size={24} name="insta" />
      </IconWrapper>

      <Title onClick={() => router.push('/')}>AFTERDINNERCLUB</Title>

      <IconWrapper onClick={share}>
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

const Title = styled.p`
  cursor: pointer;
`;
