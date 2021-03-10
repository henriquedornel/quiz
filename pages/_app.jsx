import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="title" content="Quiz" />
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quiz-henriquedornel.vercel.app/" />
        <meta property="og:title" content="Quiz" />
        <meta property="og:description" content="" />
        <meta property="og:image" content={db.bg} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quiz-henriquedornel.vercel.app/" />
        <meta property="twitter:title" content="Quiz" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content={db.bg} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
