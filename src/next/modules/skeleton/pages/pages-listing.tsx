import ContentLoader from 'react-content-loader'
import styled from 'styled-components'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

export const PageCountSkeleton = props => (
  <PageCountStyled>
    <ContentLoader
      speed={2}
      width={106}
      height={28}
      viewBox="0 0 106 28"
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      {...props}
    >
      <rect x="0" y="0" rx="4" ry="4" width="106" height="28" />
    </ContentLoader>
  </PageCountStyled>
)

const PageCountStyled = styled.div`
  margin-left: 16px;
  display: inline;
  position: absolute;
`

const ToolbarLoader = props => (
  <ContentLoader
    speed={2}
    width={106}
    height={16}
    viewBox="0 0 106 16"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="106" height="16" />
  </ContentLoader>
)

export const NameLoader = props => (
  <ContentLoader
    speed={2}
    width={205}
    height={22}
    viewBox="0 0 205 22"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="205" height="22" />
  </ContentLoader>
)

export const UpdateLoader = props => (
  <ContentLoader
    speed={2}
    width={71}
    height={22}
    viewBox="0 0 71 22"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="71" height="22" />
  </ContentLoader>
)

export const PublishLoader = props => (
  <ContentLoader
    speed={2}
    width={73}
    height={22}
    viewBox="0 0 73 22"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="1" y="0" rx="4" ry="4" width="72" height="22" />
  </ContentLoader>
)

export const ActionLoader = props => (
  <ContentLoader
    speed={2}
    width={140}
    height={54}
    viewBox="0 0 140 54"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="15" rx="4" ry="4" width="24" height="24" />
    <rect x="32" y="15" rx="4" ry="4" width="24" height="24" />
    <rect x="64" y="15" rx="4" ry="4" width="24" height="24" />
    <rect x="96" y="15" rx="4" ry="4" width="24" height="24" />
  </ContentLoader>
)
