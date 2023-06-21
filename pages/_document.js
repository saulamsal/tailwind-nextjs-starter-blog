import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/images/me.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/me.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/me.png" />
          <link rel="manifest" href="/static/images/me.png" />
          <link rel="mask-icon" href="/static/images/me.png" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#fff" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:image" content="/static/images/og_pp.png" />
          <meta property="og:image:secure_url" content="/static/images/og_pp.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
