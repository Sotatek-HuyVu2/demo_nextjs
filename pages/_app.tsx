import GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app'
import Menu from "../components/menu";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Menu/>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
  )
}

