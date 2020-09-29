import React, { Fragment, Component } from 'react';
import { getStateInStore } from '@/lib/store';
import Head from 'next/head';
import Page from '@/layout/IndexLayout';
import './index.less';

class Home extends Component {
  static async getInitialProps({ res }) {
    return res.locals;
  }
  constructor(props) {
    super(props);
    const { storeData = {} } = getStateInStore();
    const { commonSeoData = {} } = storeData;
    this.state = {
      commonSeoData,
      seoTDK: {},
    };
  }

  componentDidMount() {

  }

  rmLast(str = '') {
    return str.substr(0, str.length - 1)
  }

  render () {
    return (
      <Fragment>
        <Head>
          <title>aaa</title>
          <meta name="keywords" content="bbb" />
          <meta name="description" content="ccc" />
        </Head>

        <Page>
          <div className='page-index'>
            hello~
          </div>
        </Page>
      </Fragment>
    )
  }
}

export default Home;
