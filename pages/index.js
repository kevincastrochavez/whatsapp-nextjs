import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      {/* This can be dynamic using props */}
      <Head>
        <title>WhatsApp 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Sidebar />
    </div>
  );
}
