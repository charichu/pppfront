import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import LoginForm from '../components/login-form';

function Home({ cookies }) {
  console.log(cookies.logged_in);

  if(cookies.logged_in) {
    console.log(true)
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1 className={styles.title}>
            The Pen & Paper Pub
          </h1>
  
          <p className={styles.description}>
            Check your profile information <Link href="/account/profile">here!</Link>
          </p>
        </main>
      </div>
    ) 
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          The Pen & Paper Pub
        </h1>

        <p className={styles.description}>
          Test page for <code> the pen&paper pub</code>
        </p>
        Login:
        <LoginForm/>
        <p>
          Register a new account <Link href="/account/register">here!</Link>
        </p>
        <p>          
          <Link href="/account/verify">Verify Your Account</Link>
        </p>
        <h2>
          <Link href="/devblog/todo">DevBlog: Basic Roadmap</Link>
        </h2>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const cookies = context.req.cookies;
  return {
    props: {cookies},
  };
}

export default Home