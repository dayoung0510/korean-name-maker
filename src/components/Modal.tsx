import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import Flex from '@/components/Flex';
import Typo from '@/components/Typo';
import Button from '@/components/Button';
import ShareIcons from './ShareIcons';

type Props = {
  open: boolean;
  onClose: () => void;
};

const Modal = ({ onClose, open }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // dim 영역 클릭 시 close
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if (ref.current === e.target) {
      onClose();
    }
  };

  // 외부(배경) 컴포넌트 스크롤 막기
  useEffect(() => {
    if (open) {
      document.body.style.cssText = `position: fixed`;
    } else {
      document.body.style.cssText = `position: relative`;
    }

    return () => {
      document.body.style.cssText = `position: relative`;
    };
  }, [open]);

  return (
    <Background $open={open}>
      <Wrapper>
        <div
          ref={ref}
          style={{ position: 'relative', width: '100%', height: '100%' }}
          onClick={handleClose}
        >
          <StyledModal>
            <StyledModalBody>
              <Flex $direction="column" $gap={{ row: 40 }}>
                <Flex $direction="column" $gap={{ row: 20 }}>
                  <TitleTypo>🎊 축하드립니다 🎉</TitleTypo>
                  <Typo $size={20}>이미 아름다운 이름을 갖고 계셨군요!</Typo>
                </Flex>

                <Flex $direction="column" $gap={{ row: 10 }} $isFull>
                  <Typo>주변 사람들에게도 새 이름을 선물해 주세요.</Typo>
                  <ShareIcons />
                  <Button variant="fillBlack" onClick={onClose}>
                    돌아가기
                  </Button>
                </Flex>
              </Flex>
            </StyledModalBody>
          </StyledModal>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Modal;

const Background = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;

  display: ${(props) => (props.$open ? 'block' : 'none')};
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const StyledModal = styled.div<{ $width?: number; $height?: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 60px 20px;
  border-radius: 10px;

  width: 600px;
  ${({ theme }) => theme.device.mobile} {
    width: 350px;
  }
`;

const StyledModalBody = styled.div`
  color: #000;
  height: 100%;
`;

const TitleTypo = styled(Typo)`
  font-family: 'Climate';
  font-size: 30px;
`;
