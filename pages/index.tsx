import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recruit</title>
      </Head>
      <h1 className="text-red-300 text-2xl font-semibold">Welcome</h1>
    </div>
  );
};

export default Home;
