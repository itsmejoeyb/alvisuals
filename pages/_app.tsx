import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://alvisuals.com/${router.route}`
  return (
    <>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Roboto+Condensed&family=Roboto+Serif:wght@400;500&family=Vesper+Libre&display=swap" rel="stylesheet" />
      </Head>
      <Navigation />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
