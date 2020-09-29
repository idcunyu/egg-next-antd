import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      allAsPath: ctx.asPath || '',
      allUserConfig: ctx.res.userConfig || {},
    }
  }

  render() {
    const {
      allUserConfig = {},
      allAsPath = ''
    } = this.props;
    
    return (
      <Html>
        <Head>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument