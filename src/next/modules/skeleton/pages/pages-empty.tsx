import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'
import { Skeleton, Spin } from 'antd'

const PagesEmptySkeleton = () => {
  return (
    <DashboardStyled>
      <ContentStyled>
        <MainContentLoader />
      </ContentStyled>
    </DashboardStyled>
  )
}

export default PagesEmptySkeleton

const DashboardStyled = styled.div`
  overflow: hidden;
  margin-top: 24px;
`
const ContentStyled = styled.div``

// const HeaderStyled = styled.div`
// 	margin-bottom: 24px;
// 	display: grid;
// 	grid-template-columns: 1fr 1fr;
// `

// const HeaderLoaderLeft = props => (
// 	<ContentLoader
// 		speed={2}
// 		width={240}
// 		height={68}
// 		viewBox='0 0 240 68'
// 		backgroundColor='#d9d9d9'
// 		foregroundColor='#bebebe'
// 		{...props}
// 	>
// 		<rect x='0' y='0' rx='4' ry='4' width='240' height='28' />
// 		<rect x='0' y='44' rx='4' ry='4' width='78' height='24' />
// 	</ContentLoader>
// )

// const HeaderLoaderRight = props => (
// 	<div style={{ justifySelf: 'end' }}>
// 		<ContentLoader
// 			speed={2}
// 			width={144}
// 			height={16}
// 			viewBox='0 0 144 16'
// 			backgroundColor='#d9d9d9'
// 			foregroundColor='#bebebe'
// 			{...props}
// 		>
// 			<rect x='0' y='0' rx='4' ry='4' width='144' height='16' />
// 		</ContentLoader>
// 	</div>
// )

const MainContentLoader = props => (
  <ContentLoader
    speed={2}
    width={5000}
    height={410}
    viewBox="0 0 5000 410"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="5000" height="410" />
  </ContentLoader>
)

export function YoutubeSkeleton() {
  return (
    <LoaderStyled className="pa">
      <GetStartedLoader />
    </LoaderStyled>
  )
}

const GetStartedLoader = props => (
  <ContentLoader
    speed={2}
    width={2000}
    height={1000}
    viewBox="0 0 2000 1000"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="2000" height="1000" />
  </ContentLoader>
)

const LoaderStyled = styled.div`
  background: #ecebeb;
  width: calc(100% - 24px);
  height: 100%;
  z-index: 2;
  overflow: hidden;
`

interface TableSkeletonProps {
  children: Element | React.ReactNode
  loading: boolean
  firstLoading: boolean
}
export const TableLoading = (props: TableSkeletonProps) => {
  const { children, loading, firstLoading } = props
  if (firstLoading) {
    return (
      <StyledTableSkeleton loading={loading} active={true} title={{ width: '100%' }} paragraph={false}>
        {children}
      </StyledTableSkeleton>
    )
  }
  return <Spin spinning={loading}>{children}</Spin>
}
const StyledTableSkeleton = styled(Skeleton)`
  & .ant-skeleton-title {
    height: 410px !important;
  }
`
