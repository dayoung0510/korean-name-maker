'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { getResult } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import Typo from '@/components/Typo';
import Flex from '@/components/Flex';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Button from '@/components/Button';

const ResultPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const isMobile = useMediaQuery();

  // 결과데이터 가져오기
  const { data } = useQuery({
    queryKey: ['count'],
    queryFn: () => {
      if (!!id) {
        return getResult(id);
      }
    },
    enabled: !!id,
  });

  return (
    <Container>
      <Flex $direction="column" $gap={{ row: isMobile ? 60 : 40 }} $isFull>
        <Flex $direction="column" $gap={{ row: 6 }}>
          <Typo>당신의 우리말 이름은</Typo>
          <NameTypo>강돋우리</NameTypo>
        </Flex>
        <Flex $direction="column" $gap={{ row: isMobile ? 30 : 40 }} $isFull>
          <ShadowBox>안녕하세요</ShadowBox>

          <div style={{ position: 'relative', width: '100%' }}>
            <ShadowBox>돋우리님은 챙겨줄것 같네요</ShadowBox>
            <DecoImage />
          </div>
        </Flex>

        <Flex
          $direction="column"
          $gap={{ row: 40 }}
          $isFull
          style={{ marginTop: '20px' }}
        >
          <Flex
            $direction="column"
            $gap={{ row: 21 }}
            $align={isMobile ? 'start' : 'center'}
            $isFull
          >
            <Typo
              $align="center"
              style={{ lineHeight: 1.4 }}
            >{`돋우리와 비슷한 의미를 가진\n우리말 단어를 더 알려드릴게요.`}</Typo>
          </Flex>

          <Grid>
            <AdditionalBox>하나</AdditionalBox>
            <AdditionalBox>하나</AdditionalBox>
            <AdditionalBox>하나</AdditionalBox>
          </Grid>

          <ShadowBox>공유</ShadowBox>

          <Button variant="fillBlack">다른 이름 지어보기</Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 600px;
  padding: 140px 0;

  ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 60px 20px;
  }
`;

const NameTypo = styled.p`
  font-size: 60px;
  font-family: 'Climate';
`;

const ShadowBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 43px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  ${({ theme }) => theme.device.mobile} {
    padding: 40px 20px;
  }
`;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`;
const AdditionalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #000;
  padding: 16px 40px;
  border-radius: 10px;
  min-width: 100px;
`;

const DecoImage = styled.div`
  background-image: url('/images/ADC_img.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: absolute;
  top: -95px;
  right: 0;

  width: 120px;
  height: 120px;

  ${({ theme }) => theme.device.mobile} {
    width: 100px;
    height: 100px;
    top: -80px;
  }
`;
