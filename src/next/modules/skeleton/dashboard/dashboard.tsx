import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const DashboardSkeleton = () => {
  return (
    <DashboardStyled>
      <MainStyled>
        <WelcomeLoader />
        <GetStartedLoader />
        <DashboardCommonLoader key="1" />
        <DashboardCommonLoader key="2" />
        <DashboardCommonLoader key="3" />
      </MainStyled>

      <SideStyled>
        <DashboardSideLoader key="1" />
        <DashboardSideLoader key="2" />
      </SideStyled>
    </DashboardStyled>
  )
}

export default DashboardSkeleton

const DashboardStyled = styled.div`
  display: grid;
  grid-template-columns: 771px 410px;
  justify-content: center;
`
const MainStyled = styled.div`
  row-gap: 27px;
  display: grid;
`

const SideStyled = styled.div`
  padding-top: 56px;
`

const WelcomeLoader = props => (
  <ContentLoader
    speed={2}
    width={240}
    height={28}
    viewBox="0 0 240 28"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="240" height="28" />
  </ContentLoader>
)

const GetStartedLoader = props => (
  <ContentLoader
    speed={2}
    width={741}
    height={320}
    viewBox="0 0 741 320"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="741" height="320" />
  </ContentLoader>
)

const DashboardCommonLoader = props => (
  <ContentLoader
    speed={2}
    width={741}
    height={200}
    viewBox="0 0 741 200"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="741" height="200" />
  </ContentLoader>
)

const DashboardSideLoader = props => (
  <ContentLoader
    speed={2}
    width={409}
    height={200}
    viewBox="0 0 409 200"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    style={{ marginBottom: '27px', width: '100%' }}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="409" height="200" />
  </ContentLoader>
)
