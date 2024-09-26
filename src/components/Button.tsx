'use client';

import styled, { css } from 'styled-components';

type ButtonVariantType =
  | 'fillBlue'
  | 'fillBlack'
  | 'outlinedBlue'
  | 'outlinedBlack';

type ButtonProps = {
  children: React.ReactNode;
  variant: ButtonVariantType;
};

const buttonStyles: Record<ButtonVariantType, ReturnType<typeof css>> = {
  fillBlack: css`
    background-color: #000;
    color: #fff;
  `,
  fillBlue: css`
    background-color: #213da4;
    color: #213da4;
  `,
  outlinedBlack: css`
    border: 1px solid #000;
    color: #000;
    background-color: #fff;
  `,
  outlinedBlue: css`
    border: 1px solid #213da4;
    color: #213da4;
    background-color: #fff;
  `,
};

const Button = ({ children, variant }: ButtonProps) => {
  return <StyledButton $variant={variant}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<{ $variant: ButtonVariantType }>`
  padding: 18px 0;
  font-size: 20px;
  border-radius: 10px;
  width: 270px;

  ${({ $variant }) => buttonStyles[$variant]};
`;
