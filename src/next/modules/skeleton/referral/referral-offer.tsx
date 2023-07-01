import ContentLoader from 'react-content-loader'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const ReferralOfferSkeleton = props => (
  <ContentLoader
    speed={2}
    width={960}
    height={120}
    viewBox="0 0 960 120"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="960" height="120" />
  </ContentLoader>
)

export default ReferralOfferSkeleton
