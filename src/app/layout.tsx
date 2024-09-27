'use client';

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
      <head></head>
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Container>
                <NavBar />
                <div className="content-wrapper">{children}</div>
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
