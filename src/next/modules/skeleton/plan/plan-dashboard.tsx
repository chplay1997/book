import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const PlanDashboardSkeleton = () => {
  return (
    <DashboardStyled className={'ctnr'}>
      <HeaderStyled>
        <HeaderLoader />
        <HeaderLoader1 />
      </HeaderStyled>
      <ContentStyled>
        <MainContentLoader />
      </ContentStyled>
      <PlanStyled>
        <PlanContainer>
          <PlanLoader />
        </PlanContainer>
        <PlanContainer>
          <PlanLoader />
        </PlanContainer>
        <PlanContainer>
          <PlanLoader />
        </PlanContainer>
      </PlanStyled>
      <ReviewStyled>
        <ReviewLoader />
        <ReviewLoader1 />
      </ReviewStyled>
      <FaqStyled>
        <FaqLoader />
        <FaqLoader1 />
      </FaqStyled>
    </DashboardStyled>
  )
}

export default PlanDashboardSkeleton

const DashboardStyled = styled.div``

const HeaderStyled = styled.div`
  margin-bottom: 24px;
  margin-top: 40px;
`

const ContentStyled = styled.div`
  overflow: hidden;
`
const PlanStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
`
const PlanContainer = styled.div`
  overflow: hidden;
  margin-bottom: 64px;
  margin-top: 64px;
`
const ReviewStyled = styled.div`
  padding: 64px 120px;
  background-color: #f0f2ff;
`

const FaqStyled = styled.div`
  padding: 64px 120px;
  padding-bottom: 48px;
`
const ContentStyled1 = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 24px;
`

const HeaderLoader = props => (
  <ContentLoader
    speed={2}
    width={120}
    height={32}
    viewBox="0 0 120 32"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="120" height="32" />
  </ContentLoader>
)

const HeaderLoader1 = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={58}
    viewBox="0 0 400 58"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    style={{ marginTop: '24px', display: 'block' }}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="400" height="28" />
    <rect x="0" y="36" rx="4" ry="4" width="240" height="22" />
  </ContentLoader>
)

const MainContentLoader = props => (
  <ContentLoader
    speed={2}
    width={5000}
    height={240}
    viewBox="0 0 5000 240"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="5000" height="240" />
  </ContentLoader>
)

export const MainContentSkeleton = () => {
  return (
    <ContentStyled1>
      <MainContentLoader />
    </ContentStyled1>
  )
}

const PlanLoader = props => (
  <ContentLoader
    speed={2}
    width={460}
    height={159}
    viewBox="0 0 460 159"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="460" height="159" />
  </ContentLoader>
)

const ReviewLoader = props => (
  <ContentLoader
    speed={2}
    width={1126}
    height={58}
    viewBox="0 0 1126 58"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    style={{ marginBottom: '48px', display: 'block' }}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="339" height="28" />
    <rect x="0" y="36" rx="4" ry="4" width="486" height="22" />
  </ContentLoader>
)

const ReviewLoader1 = props => (
  <ContentLoader
    speed={2}
    width={360}
    height={72}
    viewBox="0 0 360 72"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="293" height="16" />
    <rect x="0" y="28" rx="2" ry="2" width="293" height="16" />
    <rect x="0" y="56" rx="2" ry="2" width="169" height="16" />
  </ContentLoader>
)

export const ReviewSkeleton = () => {
  return (
    <div className="ctnr">
      <ReviewLoader1 />
    </div>
  )
}

const FaqLoader = props => (
  <ContentLoader
    speed={2}
    width={1126}
    height={132}
    viewBox="0 0 1126 132"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    style={{ marginBottom: '112px', display: 'block' }}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="339" height="28" />
    <rect x="0" y="60" rx="2" ry="2" width="380" height="16" />
    <rect x="0" y="88" rx="2" ry="2" width="380" height="16" />
    <rect x="0" y="116" rx="2" ry="2" width="219" height="16" />
  </ContentLoader>
)

const FaqLoader1 = props => (
  <ContentLoader
    speed={2}
    width={355}
    height={64}
    viewBox="0 0 355 64"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="173" height="28" />
    <rect x="0" y="36" rx="4" ry="4" width="355" height="28" />
  </ContentLoader>
)

const StatisticLoader = props => (
  <ContentLoader
    speed={2}
    width={194}
    height={68}
    viewBox="0 0 194 68"
    backgroundColor="#dddddd"
    foregroundColor="#faf9fb"
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="78" height="36" />
    <rect x="0" y="44" rx="4" ry="4" width="92" height="24" />
    <rect x="116" y="0" rx="4" ry="4" width="78" height="36" />
    <rect x="116" y="44" rx="4" ry="4" width="39" height="24" />
  </ContentLoader>
)

export const StatisticSkeleton = () => {
  return <StatisticLoader />
}
