import Head from 'next/head'
import { defineCustomElements } from '../../../loader';

defineCustomElements();


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <my-component></my-component>

      <main>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
