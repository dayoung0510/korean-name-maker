import { SVGAttributes } from 'react';
import theme, { ColorType } from '@/styles/theme';

export type IconNameType = keyof typeof iconList;

export type IconProps = {
  name: IconNameType;
  size?: number; // 기준단위 px
  color?: keyof ColorType;
} & SVGAttributes<SVGElement>;

const Icon = ({ name, size = 16, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      color={color ? theme.colors[color] : 'currentColor'}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconList[name]}
    </svg>
  );
};

export default Icon;

const iconList = {
  plus: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L9 17"
        stroke="#666666"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 9L17 9"
        stroke="#666666"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  trash: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 6L5 14C5 15.8613 5 16.7919 5.24472 17.5451C5.73931 19.0673 6.93273 20.2607 8.45492 20.7553C9.20808 21 10.1387 21 12 21V21C13.8613 21 14.7919 21 15.5451 20.7553C17.0673 20.2607 18.2607 19.0673 18.7553 17.5451C19 16.7919 19 15.8613 19 14V6M5 6H3M5 6L9 6M19 6H21M19 6H15M9 6V6C9 5.06812 9 4.60218 9.15224 4.23463C9.35523 3.74458 9.74458 3.35523 10.2346 3.15224C10.6022 3 11.0681 3 12 3V3C12.9319 3 13.3978 3 13.7654 3.15224C14.2554 3.35523 14.6448 3.74458 14.8478 4.23463C15 4.60218 15 5.06812 15 6V6M9 6L15 6M9.5 9.5L9.5 16.5M14.5 9.5L14.5 16.5"
        stroke="#666666"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
