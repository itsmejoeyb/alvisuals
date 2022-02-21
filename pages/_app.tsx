import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://alvisuals.com/${router.route}`
  return (
    <>
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
