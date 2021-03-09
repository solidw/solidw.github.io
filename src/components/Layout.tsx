import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/styles';
import Header from './Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const useStyles = makeStyles({
  main: {
    height: '100%',
  },
});

function Layout({ children, title = 'This is the default title' }: Props) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default Layout;
