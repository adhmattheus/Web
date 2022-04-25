
import { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { SessionProvider as NextAtuhProvider } from 'next-auth/react'


import '../styles/global.scss';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAtuhProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAtuhProvider>
  )
}

export default MyApp