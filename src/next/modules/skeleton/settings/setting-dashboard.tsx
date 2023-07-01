import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const SettingDashboardSkeleton = () => {
  return (
    <div className="ctnr">
      <DashboardStyled>
        <HeaderStyled>
          <HeaderLoader />
        </HeaderStyled>
        <ContentStyled>
          <MainContentLoader key="1" />
          <MainContentLoader key="2" />
        </ContentStyled>
      </DashboardStyled>
    </div>
  )
}

export default SettingDashboardSkeleton

const DashboardStyled = styled.div``

const HeaderStyled = styled.div`
  margin-bottom: 24px;
`

const ContentStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    width={564}
    height={100}
    viewBox="0 0 564 100"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="564" height="100" />
  </ContentLoader>
)
