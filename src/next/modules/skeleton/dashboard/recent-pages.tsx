import ContentLoader from 'react-content-loader'
import { Table } from 'antd'
import t from '@/language'
import { backgroundColor, foregroundColor } from '@/modules/skeleton/skeleton-color'

const { Column } = Table

const TitleLoader = props => (
  <ContentLoader
    speed={2}
    width={148}
    height={96}
    viewBox="0 0 148 96"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="148" height="16" />
    <rect x="0" y="40" rx="2" ry="2" width="148" height="16" />
    <rect x="0" y="80" rx="2" ry="2" width="148" height="16" />
  </ContentLoader>
)

const TypeLoader = props => (
  <ContentLoader
    speed={2}
    width={83}
    height={96}
    viewBox="0 0 83 96"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="83" height="16" />
    <rect x="0" y="40" rx="2" ry="2" width="83" height="16" />
    <rect x="0" y="80" rx="2" ry="2" width="83" height="16" />
  </ContentLoader>
)

const UpdateLoader = props => (
  <ContentLoader
    speed={2}
    width={96}
    height={96}
    viewBox="0 0 96 96"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="96" height="16" />
    <rect x="0" y="40" rx="2" ry="2" width="96" height="16" />
    <rect x="0" y="80" rx="2" ry="2" width="96" height="16" />
  </ContentLoader>
)

const ActionLoader = props => (
  <ContentLoader
    speed={2}
    width={24}
    height={97}
    viewBox="0 0 24 97"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="1" rx="2" ry="2" width="24" height="16" />
    <rect x="0" y="41" rx="2" ry="2" width="24" height="16" />
    <rect x="0" y="81" rx="2" ry="2" width="24" height="16" />
  </ContentLoader>
)
const pages = [
  {
    key: '1',
    title: <TitleLoader />,
    type: <TypeLoader />,
    updatedAt: <UpdateLoader />,
    _id: <ActionLoader />,
  },
]
const RecentPagesSkeleton = () => (
  <Table pagination={false} dataSource={pages}>
    <Column title={t('TITLE')} dataIndex="title" />
    <Column title={t('TYPE')} dataIndex="type" />
    <Column title={t('LAST_UPDATED')} dataIndex="updatedAt" />
    <Column title={t('ACTIONS')} dataIndex="_id" />
  </Table>
)

export default RecentPagesSkeleton
