import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Config from 'Config'

import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'

import Header from 'components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { StyledH1 } from './style'
import FormComponent from 'components/FormComponent'

const Contact: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
      setTitle('Contact')
  }, [])



  return (
    <>
    <Header />
    <Container className='pb-4'>
      <Row>
        <Col xs={12}>
          <StyledH1>Contact</StyledH1>
        </Col>
      </Row>
      <FormComponent />
    </Container>
    </>
  )
}

export default memo(Contact)
