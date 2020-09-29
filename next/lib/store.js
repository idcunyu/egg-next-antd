import React from 'react';
import { initializeStore } from '../store/global';
/* eslint no-underscore-dangle: 0 */
const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

export function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    console.log("isServer no");
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export function getStateInStore() {
  return getOrCreateStore().getState();
}

export default App =>
  class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const { req, res } = appContext.ctx;
      const {
        userConfig = {},
        query = {},
        locals = {},
      } = res;
      const reduxStore = getOrCreateStore({
        userConfig, // 获取配置信息
        query,
        storeData: locals,
      });

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialServerState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialServerState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
