import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { Spline_Sans } from 'next/font/google'

const spline = Spline_Sans({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={spline.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  )
}
