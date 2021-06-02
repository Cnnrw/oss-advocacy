import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode }                     from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA}', {
              page_path: window.location.pathname,
            });
              `
            }}
          />
          <meta charSet='utf-8' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='manifest' href='/site.webmanifest'/>
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='theme-color' content='#ffffff' />
          <link href='https://fonts.googleapis.com/css?family=Fira+Code:500|Archivo:700|Roboto:400,400i,700,700i&display=swap' rel='stylesheet' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
        </Head>

        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
