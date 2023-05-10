import * as React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme, { Colors } from 'constants/theme';
import createEmotionCache from 'libs/createEmotionCache';
import { DEFAULT_SEO } from 'constants/seo';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
const styles = {
  component: {
    maxWidth: 1000,
    width: '100%',
    height: '100%',
    bottom: 0,
    margin: {
      sm: 'auto',
      md: 'auto',
      lg: 'auto',
    },
    position: { xs: 'static', sm: 'relative' },
  },
  loader: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2000,
    backgroundColor: Colors.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
    transition: 'ease all 0.3s',
  },
};
