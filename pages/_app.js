import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IronPulse Fitness – Push Your Limits. Redefine Your Strength.</title>
        <meta name="description" content="IronPulse Fitness – A premium boutique gym offering personalized training, group classes, and expert nutrition coaching. Join now and transform your body." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
