const theme = {
  colors: {
    lightGray: '#F3F3F3',
  },
  device: {
    mobile: `@media only screen and (max-width: 768px)`,
    tablet: `@media only screen and (min-width: 769px) and (max-width: 1339px)`,
  },
};

export type ColorType = typeof theme.colors;

export default theme;
