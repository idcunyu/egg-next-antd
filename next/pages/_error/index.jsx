import Error from 'next/error'
import './index.less'

const CommonError = ({ statusCode }) => {
  let renderDom = <Error statusCode={statusCode} />

  if (statusCode === 404) {
    renderDom = (
      <div className="page-error page-404">
        <div className="desc">很抱歉！您访问的页面找不到了~</div>
        <div className="detail">网址有错误：请检查地址是否完整或存在多余字符，访问正确的网址已失效：页面已不存在，去其他页面看看。</div>
        <div className="btn" onClick={handleToIndex}>返回首页</div>
      </div>
    )
  }
  
  return renderDom;
}

const handleToIndex = () => {
  location.href = "/"
}

CommonError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default CommonError