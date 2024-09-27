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
  insta: (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 8.2C1.5 5.20021 1.5 3.70032 2.26393 2.64886C2.51065 2.30928 2.80928 2.01065 3.14886 1.76393C4.20032 1 5.70021 1 8.7 1H12.3C15.2998 1 16.7997 1 17.8511 1.76393C18.1907 2.01065 18.4893 2.30928 18.7361 2.64886C19.5 3.70032 19.5 5.20021 19.5 8.2V11.8C19.5 14.7998 19.5 16.2997 18.7361 17.3511C18.4893 17.6907 18.1907 17.9893 17.8511 18.2361C16.7997 19 15.2998 19 12.3 19H8.7C5.70021 19 4.20032 19 3.14886 18.2361C2.80928 17.9893 2.51065 17.6907 2.26393 17.3511C1.5 16.2997 1.5 14.7998 1.5 11.8V8.2Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 10C14.5 12.2091 12.7091 14 10.5 14C8.29086 14 6.5 12.2091 6.5 10C6.5 7.79086 8.29086 6 10.5 6C12.7091 6 14.5 7.79086 14.5 10Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  ),
  share: (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10L15.5 7M10 14L15.5 17M18.5 21V21C20.1569 21 21.5 19.6569 21.5 18V18C21.5 16.3431 20.1569 15 18.5 15V15C16.8431 15 15.5 16.3431 15.5 18V18C15.5 19.6569 16.8431 21 18.5 21ZM18.5 9V9C20.1569 9 21.5 7.65685 21.5 6V6C21.5 4.34315 20.1569 3 18.5 3V3C16.8431 3 15.5 4.34315 15.5 6V6C15.5 7.65685 16.8431 9 18.5 9ZM7 15.5V15.5C8.933 15.5 10.5 13.933 10.5 12V12C10.5 10.067 8.933 8.5 7 8.5V8.5C5.067 8.5 3.5 10.067 3.5 12V12C3.5 13.933 5.067 15.5 7 15.5Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
