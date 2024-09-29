'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Flex from '@/components/Flex';
import Button from '@/components/Button';

const ShareIcons = () => {
  const pathname = usePathname();

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

  const [test, setTest] = useState(false);

  const share = () => {
    if (test) {
      navigator
        .share({ title: '우리말 이름 짓기', url })
        .then(() => {
          alert('Sharing was successful!');
          // 공유 성공 시 실행할 코드
        })
        .catch((error) => {
          navigator.clipboard.writeText(url);
          alert(`링크가 복사되었습니다.`);
          console.log(error, 'err..');
          // 공유 실패 시 실행할 코드
        });
    } else {
      navigator.clipboard.writeText(url);
      alert(`링크가 복사되었습니다.`);
    }
  };

  return (
    <Container>
      <Flex $gap={{ column: 10 }}>
        <Button variant="outlinedBlack" onClick={share}>
          친구와 공유하기
        </Button>
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
  border-radius: 10px;
`;
const More = styled.p`
  cursor: pointer;
  font-size: 14px;
`;
