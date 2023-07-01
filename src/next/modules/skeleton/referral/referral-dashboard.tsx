import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const ReferralDashboardSkeleton = () => {
  return (
    <div className="ctnr">
      <DashboardStyled>
        <HeaderStyled>
          <HeaderLoader />
        </HeaderStyled>
        <ContentStyled>
          <MainContentLoader key="1" />
          <MainContentLoader key="2" />
          <MainContentLoader key="3" />
        </ContentStyled>
      </DashboardStyled>
    </div>
  )
}

export default ReferralDashboardSkeleton

const DashboardStyled = styled.div`
  height: 85vh;
`
const HeaderStyled = styled.div`
  margin-bottom: 48px;
`

const ContentStyled = styled.div`
  display: grid;
  row-gap: 24px;
`

const HeaderLoader = props => (
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

const MainContentLoader = props => (
  <ContentLoader
    speed={2}
    width={1152}
    height={120}
    viewBox="0 0 1152 120"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="293" height="16" />
    <rect x="0" y="28" rx="2" ry="2" width="293" height="16" />
    <rect x="0" y="56" rx="2" ry="2" width="169" height="16" />
    <rect x="392" y="0" rx="4" ry="4" width="760" height="120" />
  </ContentLoader>
)
