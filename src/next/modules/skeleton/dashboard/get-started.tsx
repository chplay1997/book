import styled from 'styled-components'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

function GetStartedSkeleton() {
  return (
    <LoaderStyled className="pa">
      <GetStartedLoader />
    </LoaderStyled>
  )
}

const GetStartedLoader = props => (
  <ContentLoader
    speed={2}
    width={1500}
    height={800}
    viewBox="0 0 1500 800"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="1500" height="800" />
  </ContentLoader>
)

const LoaderStyled = styled.div`
  background: #ecebeb;
  width: 100.5%;
  height: 100.5%;
  z-index: 2;
  overflow: hidden;
`
export default GetStartedSkeleton
