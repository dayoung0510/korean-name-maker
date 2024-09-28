'use client';

import styled from 'styled-components';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(document.location.search);
      const value = `${
        window.location.origin
      }${pathname}?${searchParams.toString()}`;
      setUrl(value);
    }
  }, []);

  const share = () => {
    navigator.share({
      title: '우리말 이름 짓기',
      url,
    });
  };

  return (
    <Container $justify="center" $gap={{ column: 64 }}>
      <IconWrapper>
        <a
          href="https://www.instagram.com/afterdinnerclub.kr?igsh=OWQzaHFiZ2dlMXI="
          target="_blank"
        >
          <Icon size={24} name="insta" />
        </a>
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
