import React from 'react'
import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

export const AccountStatusSkeleton = props => (
  <ContentLoader
    speed={2}
    width={52}
    height={16}
    viewBox="0 0 52 16"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <path d="M 0 0 h 52 v 16 H 0 z" />
  </ContentLoader>
)

export const AccountPrivacySkeleton = props => (
  <ContentLoader
    speed={2}
    width={183}
    height={42}
    viewBox="0 0 183 42"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <path d="M 0 0 h 183 v 16 H 0 z M 0 26 h 183 v 16 H 0 z" />
  </ContentLoader>
)
