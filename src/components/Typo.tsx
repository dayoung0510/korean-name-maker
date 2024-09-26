import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type TypoProps = {
  $color?: string;
  $isEllipsis?: boolean;
  $tag?: 'p' | 'span' | 'div';
  $size?: number; // 단위 px
  $weight?: 400 | 500 | 600 | 700;
  $align?: 'center' | 'left' | 'right';
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

type StyledWrapperProps = TypoProps &
  Required<Pick<TypoProps, '$color' | '$size'>>;

const Typo = ({
  $color = '#000',
  $tag = 'p',
  $size = 16,
  $weight = 500,
  $align = 'left',
  children,
  ...props
}: TypoProps) => {
  return (
    <StyledWrapper
      as={$tag}
      $color={$color}
      $size={$size}
      $weight={$weight}
      $align={$align}
      {...props}
    >
      {children}
    </StyledWrapper>
  );
};

export default Typo;

const StyledWrapper = styled.div<StyledWrapperProps>`
  white-space: pre-wrap;
  font-family: 'Pretendard';

  ${(props) => {
    return css`
      color: ${props.$color};
      font-weight: ${props.$weight};
      font-size: ${props.$size / 16}rem;
      text-align: ${props.$align};
    `;
  }};

  ${({ $isEllipsis }) =>
    // 텍스트 말줄임표 처리
    $isEllipsis &&
    css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `};
`;
