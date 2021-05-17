import Head from 'next/head'
import { defineCustomElements } from '../../../loader';

defineCustomElements();

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <my-component></my-component>
        <app-shell>
          <div slot="bottom">
            <todo-completed completed="5" total="10"></todo-completed>
          </div>
        </app-shell>
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
