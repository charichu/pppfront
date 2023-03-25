import Link from 'next/link';
import Layout from '../../components/layout';
import RegisterForm from '../../components/register-form';

export default function RegisterAccount() {
    return (
      <Layout>
        <h1>Register New Account</h1>
        <RegisterForm/>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    );
  }