import React, { Fragment, PureComponent } from 'react';
import { Layout, ConfigProvider } from 'antd';
import Head from 'next/head';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import RightBar from '@/components/common/RightBar';
import CommonHeader from '@/components/common/header';
import CommonFooter from '@/components/common/footer';

import './IndexLayout.less';

const { Content } = Layout;

class IndexLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <Fragment>
        <Head>
          <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/images/favicon.png"
          />
        </Head>
        <ConfigProvider locale={zhCN}>
          <Layout>

            {/* 页面 */}
            <Content>
              <div className="app__innerpage">{children}</div>
            </Content>

          </Layout>
        </ConfigProvider>
      </Fragment>
    );
  }
}

export default IndexLayout;
