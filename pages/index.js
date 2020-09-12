import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">devter</a>
        </h1>
        <nav className={styles.nav}>
          <Link href="/timeline">timeline</Link>
        </nav>
      </main>
    </div>
  )
}
