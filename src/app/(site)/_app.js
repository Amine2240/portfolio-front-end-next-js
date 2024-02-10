// pages/_app.tsx
import { AppProps } from 'next/app';
import RootLayout from '../layout'; // Adjust the path based on your project structure
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
