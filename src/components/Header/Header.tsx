import { memo, ReactElement } from 'react'
import { HeaderContainer, HeaderLogoImage, HeaderNavStyled } from './style'
import LogoImage from '../../assets/logo.png'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Header: React.FC = () => (
  <HeaderContainer>
    <Container>
      <Row className="d-flex align-items-center">
        <Col xs={6}>
          <Link to={'/'}>
            <HeaderLogoImage src={LogoImage}  alt='pokemon-logo'/>
          </Link>
        </Col>
        <Col xs={6}>
          <HeaderNavStyled>
            <Link to={'/'}>Home</Link>
            <Link to={'/pokemons'}>Pokemons</Link>
            <Link to={'/contact'}>Contact</Link>
          </HeaderNavStyled>
        </Col>
      </Row>
    </Container>
  </HeaderContainer>

)

export default memo(Header)
