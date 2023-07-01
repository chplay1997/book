import React, { useEffect, useState } from 'react'
import { Button, Row, Layout, Typography, Card, Input } from 'antd'
import { t } from 'i18next'

const { Title } = Typography

export default function Error() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    const errorMessage = window.location.href
      .match(/message=([^&]*)/)[0]
      .split('=')[1]
      .replaceAll('%20', ' ')
    setMessage(errorMessage) // you can change the message here
  }, [])

  const [shopDomain, setShopDomain] = useState('')

  const handleChange = (e: any) => {
    setShopDomain(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    window.location.href = '/auth/shopify?shop=' + shopDomain + '.myshopify.com'
  }

  return (
    <Layout>
      <Row align={'middle'} justify={'center'} style={{ height: '100vh' }}>
        <form onSubmit={handleSubmit}>
          <div className={'tc'}>
            <Title className={'ant-heading anm fiu mt-24 mb-16'} level={3} style={{ ['--delay' as any]: '300ms' }}>
              {message}
            </Title>
          </div>
          <Card
            bordered
            className={'anm fiu'}
            style={{ ['--delay' as any]: '400ms', width: 'min(90vw, 480px)', margin: 'auto' }}
          >
            <label className="d-block mb-8">{t('STORE_NAME')}</label>
            <Input
              className={'mb-16'}
              size={'large'}
              addonAfter="myshopify.com"
              value={shopDomain}
              onChange={handleChange}
            />
            <Button
              onClick={handleSubmit}
              size={'large'}
              type="primary"
              block
              className="ant-btn-default"
              disabled={!shopDomain}
            >
              {t('LOGIN')}
            </Button>
          </Card>
        </form>
      </Row>
    </Layout>
  )
}
