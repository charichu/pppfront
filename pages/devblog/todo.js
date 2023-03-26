import Link from 'next/link';
import Layout from '../../components/layout';

export default function ToDo() {
    return (
      <Layout>
        <h1>Things I am working on:</h1>
        <p>
            - Navigation after login/register/verify
        </p>
        <p>
            - Global Navbar and Footer
        </p>
        <p>
            - API-Tests for authentication routes
        </p>
        <p>
            - Refactor into components and maybe services for authentication, use props to set user 
        </p>
        <p>
            - Chat for logged in users
        </p>
        <p>
            - Character CRUD API
        </p>
        <p>
            - Character Creation Form
        </p>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    );
  }