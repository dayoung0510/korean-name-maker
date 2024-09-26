import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

html,
body {

  color: #000000;

  padding: 0;
  margin: 0;

  font-family:
    'Pretendard',
    sans-serif;

  font-size: 16px;

  width: 100%;
  height: 100%;
}

button {
  outline: 0;
  border: 0;
  background: 0;
  cursor: pointer;
}

input {
  outline: 0;
  border: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}


  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url(/fonts/Pretendard-Medium.eot);
    src: url(/fonts/Pretendard-Medium.eot?#iefix) format('embedded-opentype'),
    url(/fonts/Pretendard-Medium.woff2) format('woff2'),
    url(/fonts/Pretendard-Medium.woff) format('woff');
  }

  @font-face {
    font-family: 'Climate';
    font-weight: 400;
    src: url(/fonts/Climate.eot);
    src: url(/fonts/Climate.eot?#iefix) format('embedded-opentype'),
    url(/fonts/Climate.woff2) format('woff2'),
    url(/fonts/Climate.woff) format('woff');
  }
`;
