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
        <todo-completed completed="5" total="10"></todo-completed>
      </main>
    </div>
  )
}
