'use client';

import { Suspense } from 'react';
import { GlobalStyle } from '@/styles/globalStyles';
import styled from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import NavBar from '@/components/NavBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content="우리말로 이름을 불러줘" />
        <meta
          property="og:description"
          content="한글날 기념 우리말 이름 짓기"
        />
        <meta property="og:image" content="/images/ADC_img.png" />
        <meta property="og:url" content="https://afterdinnerclub.kr/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Container>
                <NavBar />

                <div className="content-wrapper">
                  <Suspense fallback={<></>}>{children}</Suspense>
                </div>
              </Container>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}

const Container = styled.div`
  position: relative;

  background-color: #f3f3f3;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  .content-wrapper {
    width: 100%;
    display: flex;
    flex: 1;
    position: relative;
    flex-direction: column;
    overflow-x: auto;
  }
`;
