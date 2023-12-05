import { Spline_Sans } from 'next/font/google';
import '@/styles/globals.css';
import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import '../styles/style.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LoadingPage from '@/components/loading';

const spline = Spline_Sans({ subsets: ['latin'] });

function Loading({ children }: any) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: any) =>
      url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return loading && <LoadingPage />;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <main className={spline.className}>
        <Layout>
          <Head>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
