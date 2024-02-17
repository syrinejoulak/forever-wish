import React from 'react';

import styles from './signup.module.scss';
import { Button, Form, Input, Label } from 'reactstrap';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <Form>
        <h1>Sign up</h1>

        <Label for='email'>Nom</Label>
        <Input placeholder='Entrez votre nom...' />

        <Label for='email'>Email</Label>
        <Input placeholder='Entrez votre addresse mail...' />

        <Label for='email'>Mot de passe</Label>
        <Input placeholder='Entrez votre mot de passe...' />

        <Button>Créer un compte</Button>
        <p>
          Déjà inscrit?<Link href='/login'> Se connecter</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignupPage;
