import React from 'react';

import LoginPage from '../components/login/index';
import Head from 'next/head';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <LoginPage />
    </>
  );
};

export default Login;
