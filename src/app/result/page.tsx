'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { getResult } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import Typo from '@/components/Typo';
import Flex from '@/components/Flex';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Button from '@/components/Button';
import ShareIcons from '@/components/ShareIcons';
import Loading from '@/components/Loading';

const ResultPage = () => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);
    const value: string = searchParams.get('id') ?? '';
    setId(value);
  }, []);

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const isMobile = useMediaQuery();

  // 결과데이터 가져오기
  const { data } = useQuery({
    queryKey: ['result', id],
    queryFn: () => {
      if (!!id) {
        return getResult(id);
      }
    },
    refetchInterval: (data) => {
      // 상태가 waiting이면 2초 간격으로 폴링
      if (data.state.data?.data.status === 'wait') {
        return 2000;
      } else if (data.state.data?.data.status === 'done') {
        setLoading(false);
        return false;
      }

      return false;
    },
    enabled: !!id,
  });

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Flex $direction="column" $gap={{ row: isMobile ? 60 : 40 }} $isFull>
        <Flex $direction="column" $gap={{ row: 6 }}>
          <Typo>당신의 우리말 이름은</Typo>
          <NameTypo>{data?.data.result.name}</NameTypo>
        </Flex>
        <Flex $direction="column" $gap={{ row: isMobile ? 30 : 40 }} $isFull>
          <ShadowBox>
            <Text>{data?.data.result.reason}</Text>
          </ShadowBox>

          <div style={{ position: 'relative', width: '100%' }}>
            <ShadowBox>
              <Text>{data?.data.result.wishingWord}</Text>
            </ShadowBox>
            <DecoImage />
          </div>
        </Flex>

        <Flex $direction="column" $gap={{ row: 20 }} $isFull>
          <ShareIcons />
          <Button variant="fillBlack" onClick={() => router.push('/')}>
            다른 이름 지어보기
          </Button>
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

const Text = styled.p`
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
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
