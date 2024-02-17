import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import styles from './login.module.scss';

const LoginPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.form_container__content}>
            <h1>Login</h1>
            <Form className={styles.form}>
              <Form.Item label='Email'>
                <Input id='email' name='email' placeholder='Entrez votre addresse mail...' type='email' />
              </Form.Item>

              <Form.Item label='Mot de passe'>
                <Input id='password' name='email' placeholder='Entrez votre mot de passe...' type='password' />
              </Form.Item>

              <div className='center'>
                <Button type='primary'>Login</Button>
              </div>
            </Form>

            <div className='d-flex justify-content-between align-items-center mt-50'>
              <p>
                Vous êtes déjà inscrit ? <Link to='/signup'>Connectez-vous ici</Link>.
              </p>

              <p>
                <Link to='/reset-password'>Mot de passe oublié</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
