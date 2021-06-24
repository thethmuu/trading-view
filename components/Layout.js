import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout(props) {
  return (
    <div className='font-body'>
      <Head>
        <title>
          Free Stock Charts, Stock Quotes and Trade Ideas — TradingView
        </title>
        <meta
          name='description'
          content='Live quotes, stock charts and expert trading ideas. TradingView is a social network for traders and investors on Stock, Futures and Forex markets!'
        />
      </Head>

      <Header />

      {/* main content */}
      <main className='text-gray-900'>
        {props.children}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
