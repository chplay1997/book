import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const SettingCommonSkeleton = () => {
  return (
    <DashboardStyled>
      <HeaderStyled>
        <HeaderLoader />
      </HeaderStyled>
      <ContentStyled>
        <MainContentLoader />
      </ContentStyled>
    </DashboardStyled>
  )
}

export default SettingCommonSkeleton

const DashboardStyled = styled.div``

const HeaderStyled = styled.div`
  margin-bottom: 24px;
`

const ContentStyled = styled.div``

const HeaderLoader = props => (
  <ContentLoader
    speed={2}
    width={1152}
    height={60}
    viewBox="0 0 1152 60"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="96" height="16" />
    <rect x="0" y="32" rx="4" ry="4" width="240" height="28" />
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
