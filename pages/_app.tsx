import GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app'
import Menu from "../components/menu";
import { Provider } from 'react-redux';
import store from '../store/configure-store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Provider store={store}>
              <Menu/>
              <Component {...pageProps} />
              <GlobalStyle />
          </Provider>
      </>
  )
}

