import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const PagesDashboardSkeleton = () => {
  return (
    <DashboardStyled>
      <HeaderStyled>
        <HeaderLoaderLeft />
        <HeaderLoaderRight />
      </HeaderStyled>
      <ContentStyled>
        <MainContentLoader />
      </ContentStyled>
    </DashboardStyled>
  )
}

export default PagesDashboardSkeleton

const DashboardStyled = styled.div`
  overflow: hidden;
`

const HeaderStyled = styled.div`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ContentStyled = styled.div``

const HeaderLoaderLeft = props => (
  <ContentLoader
    speed={2}
    width={362}
    height={68}
    viewBox="0 0 362 68"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="240" height="28" />
    <rect x="256" y="0" rx="4" ry="4" width="106" height="28" />
    <rect x="0" y="44" rx="4" ry="4" width="82" height="24" />
    <rect x="90" y="44" rx="4" ry="4" width="82" height="24" />
  </ContentLoader>
)

const HeaderLoaderRight = props => (
  <div style={{ justifySelf: 'end' }}>
    <ContentLoader
      speed={2}
      width={188}
      height={60}
      viewBox="0 0 188 60"
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      {...props}
    >
      <rect x="44" y="0" rx="4" ry="4" width="144" height="16" />
      <rect x="0" y="28" rx="4" ry="4" width="188" height="32" />
    </ContentLoader>
  </div>
)

const MainContentLoader = props => (
  <ContentLoader
    speed={2}
    width={5000}
    height={200}
    viewBox="0 0 5000 200"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="5000" height="200" />
  </ContentLoader>
)
