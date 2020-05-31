import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>[Kimchi and Sweet Phuket delivery]</h2>
        <p>
          (This is a official website - you’ll be order item on{' '}
          <a href="https://www.facebook.com/Nice-to-meet-you-113242990394108">our Facebook</a>.)
        </p>
      </section>
    </Layout>
  )
}