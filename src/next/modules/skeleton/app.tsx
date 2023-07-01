import styled from 'styled-components'
import { Layout } from 'antd'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const { Header, Sider, Content } = Layout
const AppSkeleton = () => {
  return (
    <AppSkeletonWrapper>
      <Layout style={{ height: '100vh', width: '100vw' }}>
        <HeaderWapper>
          <HeaderLoader />
        </HeaderWapper>
        <Layout>
          <SiderWrapper width={232}>
            <SiderLoader />
          </SiderWrapper>
          <ContentWrapper>
            <MainContentLoader />
          </ContentWrapper>
        </Layout>
      </Layout>
    </AppSkeletonWrapper>
  )
}

const AppSkeletonWrapper = styled.div`
  margin: 0 8px;
  overflow: hidden;
  height: 99vh;
`
const ContentWrapper = styled(Content)`
  padding-top: 96px;
  padding-left: 24px;
`
const SiderWrapper = styled(Sider)`
  background: #f0f2f5;
  padding-top: 8px;
`
const HeaderWapper = styled(Header)`
  margin-top: 8px;
  height: 36px;
  padding: 0;
  &.ant-layout-header {
    background: none !important;
  }
`

export default AppSkeleton

const MainContentLoader = props => (
  <ContentLoader
    speed={2}
    width={360}
    height={100}
    viewBox="0 0 360 100"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="240" height="28" />
    <rect x="0" y="52" rx="2" ry="2" width="360" height="16" />
    <rect x="0" y="84" rx="2" ry="2" width="280" height="16" />
  </ContentLoader>
)

const SiderLoader = props => (
  <ContentLoader
    speed={2}
    width={232}
    height={4000}
    viewBox="0 0 232 4000"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="232" height="4000" />
  </ContentLoader>
)

const HeaderLoader = props => (
  <ContentLoader
    speed={2}
    width={8000}
    height={36}
    viewBox="0 0 8000 36"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="8000" height="36" />
  </ContentLoader>
)
