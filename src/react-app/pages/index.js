import Head from 'next/head'
import { defineCustomElements } from '../../../loader';

defineCustomElements();

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <my-component></my-component>
      </main>
    </div>
  )
}
