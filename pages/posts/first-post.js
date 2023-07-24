import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout/layout'


export default function FirstPost() {
  return (

      <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)}
                />

        <h1>First Post</h1>
            <p>NextJS is easy lol.</p>
        <h2>
            <Link href="/">← Back to home</Link>

        </h2>
      </Layout>

  )
}
