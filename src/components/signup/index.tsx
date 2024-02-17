import { Link } from 'react-router-dom';

import { Button, Form, Input } from 'antd';

import styles from './signup.module.scss';

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <Form>
        <h1>Sign up</h1>

        <Form.Item label='Nom'>
          <Input placeholder='Entrez votre nom...' />
        </Form.Item>

        <Form.Item label='Email'>
          <Input placeholder='Entrez votre addresse mail...' />
        </Form.Item>

        <Form.Item label='Mot de passe'>
          <Input placeholder='Entrez votre mot de passe...' />
        </Form.Item>

        <Button type='secondary'>Créer un compte</Button>
        <p>
          Déjà inscrit?<Link to='/login'> Se connecter</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignupPage;
