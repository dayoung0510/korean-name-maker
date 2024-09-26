'use client';

import styled from 'styled-components';
import Flex from '@/components/Flex';

const AppPage = () => {
  return (
    <Background $justify="center" $align="start">
      <StyledTypo>{`우리말로\n이름을 불러줘`}</StyledTypo>
    </Background>
  );
};

export default AppPage;

const Background = styled(Flex)`
  background-color: #f3f3f3;
  height: 100%;
  padding: 160px 0;
`;

const StyledTypo = styled.p`
  font-family: 'Climate';
  line-height: 53px;
  font-size: 40px;
  text-align: center;
  white-space: pre-wrap;
`;
