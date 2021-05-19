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
        <todo-notification>
          <todo-item name="Fix that step"></todo-item>
          <todo-item name="Take out compost"></todo-item>
        </todo-notification>
      </main>
    </div>
  )
}
