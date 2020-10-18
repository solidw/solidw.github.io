import './common.css';
import React, { useEffect } from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { AppProps } from 'next/app';

import theme from '#/lib/theme';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  // nextjs Material UI example: https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}

export default MyApp;
