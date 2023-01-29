import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>AestheticDream | App Development, done well</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content="AestheticDream | App Development, done well" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:description" content="Frontend and Backend development done well to provide your customers amazing user experience" />
      <meta name="description" content="Frontend and Backend development done well to provide your customers amazing user experience" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="AestheticDream, aestheticdream, App Development, Frontend, Backend, Frontend Service, App Development Agency" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <link rel="canonical" href="https://aestheticdream.cc" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
