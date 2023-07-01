import React from 'react'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const IntegrationSkeleton = props => (
  <ContentLoader
    speed={2}
    width={293}
    height={72}
    viewBox="0 0 293 72"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="293" height="16" />
    <rect x="0" y="28" rx="2" ry="2" width="293" height="16" />
    <rect x="0" y="56" rx="2" ry="2" width="169" height="16" />
  </ContentLoader>
)

export default IntegrationSkeleton
