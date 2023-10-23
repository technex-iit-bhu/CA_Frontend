import { Spline_Sans } from 'next/font/google'
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import '../styles/style.css';
import Head from 'next/head';

const spline = Spline_Sans({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={spline.className}>
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </main>
  )
}
