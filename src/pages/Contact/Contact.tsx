import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import FormComponent from 'components/FormComponent'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { StyledH1 } from './style'

const Contact: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Contact')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container className="pb-4">
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
