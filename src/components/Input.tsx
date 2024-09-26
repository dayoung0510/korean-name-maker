'use client';

import styled from 'styled-components';

const Input = styled.input<{ $width?: number }>`
  border-radius: 10px;
  padding: 14px 20px;
  border: 1px solid #ccc;
  background-color: #fff;

  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};

  &::placeholder {
    color: #999;
  }
`;

export default Input;
