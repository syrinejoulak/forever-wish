import React from 'react';

import Image from 'next/image';
import { Button, Form, Input, Label } from 'reactstrap';

import flowers from '../../public/assets/login-image.png';
import logo from '../../public/assets/logo.png';

import styles from './login.module.scss';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.form_container__content}>
            <h1>Login</h1>
            <Form className={styles.form}>
              <Label for='email'>Email</Label>
              <Input id='email' name='email' placeholder='Entrez votre addresse mail...' type='email' />

              <Label for='password'>Mot de passe</Label>
              <Input id='password' name='email' placeholder='Entrez votre mot de passe...' type='password' />
              <div className='center'>
                <Button color='primary'>Login</Button>
              </div>
            </Form>
            <div className='d-flex justify-content-between align-items-center mt-50'>
              <p>
                Vous êtes déjà inscrit ? <Link href='/signup'>Connectez-vous ici</Link>.
              </p>

              <p>
                <Link href='/reset-password'>Mot de passe oublié</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
