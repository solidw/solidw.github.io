import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import Layout from '#/components/Layout';
import Introduce from '#/components/Introduce';

function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Introduce />
      <h1>Hello Next.js 👋</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Typography>안녕하세요.</Typography>
    </Layout>
  );
}

export default IndexPage;
