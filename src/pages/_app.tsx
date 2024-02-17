import React from 'react';

import '../styles/globals.scss';

type AppProps = {
  Component: React.ElementType;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
