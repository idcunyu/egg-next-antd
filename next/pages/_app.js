import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/store';
// import getConfig from 'next/config';
// import 'antd/dist/antd.less';
import '../static/style/app.less'

// const { publicRuntimeConfig } = getConfig();

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    // pageProps.publicRuntimeConfig = publicRuntimeConfig;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
