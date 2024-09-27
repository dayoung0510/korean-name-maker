'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import Flex from '@/components/Flex';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  XIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';

const ShareIcons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    <Container>
      <Flex $gap={{ column: 10 }}>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>

        <TwitterShareButton url={currentUrl}>
          <XIcon size={48} round={true} borderRadius={24}></XIcon>
        </TwitterShareButton>

        <TelegramShareButton url={currentUrl}>
          <TelegramIcon size={48} round={true} borderRadius={24}></TelegramIcon>
        </TelegramShareButton>

        <LineShareButton url={currentUrl}>
          <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
        </LineShareButton>

        <More onClick={share}>더보기</More>
      </Flex>
    </Container>
  );
};

export default ShareIcons;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const More = styled.p`
  cursor: pointer;
  font-size: 14px;
`;
