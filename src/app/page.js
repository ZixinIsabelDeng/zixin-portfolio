import Head from 'next/head';
import Resume from './components/Resume';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Zixin Deng</title>
        <meta name="description" content="Zixin Deng's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Resume />
    </div>
  );
}
