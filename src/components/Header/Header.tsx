import { memo, useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

import AshPikachuImage from '../../assets/ash-and-piikachu.png'
import LogoImage from '../../assets/logo.png'
import {
  HeaderContainer,
  HeaderLinks,
  HeaderLogoImage,
  HeaderMenuButton,
  HeaderNavStyled,
  HeaderNavStyledMobile,
  HeaderOffCanvasMenu,
  ImageMenuMobile,
} from './style'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Header: React.FC<IBaseComponentProps> = () => {
  const { pathname } = useLocation()

  const homeLink = '/'
  const pokemonsLink = '/pokemons'
  const contactLink = '/contact'

  const [show, setShow] = useState(false)

  const handleClose = (): void => setShow(false)
  const handleShow = (): void => setShow(true)

  return (
    <HeaderContainer>
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={6}>
            <Link to="/">
              <HeaderLogoImage src={LogoImage} alt="pokemon-logo" />
            </Link>
          </Col>
          <Col xs={6} className="d-flex justify-content-end d-md-block">
            <HeaderNavStyled>
              <HeaderLinks
                $pathname={pathname}
                $linkName={homeLink}
                to={homeLink}
              >
                Home
              </HeaderLinks>
              <HeaderLinks
                $pathname={pathname}
                $linkName={pokemonsLink}
                to={pokemonsLink}
              >
                Pokémons
              </HeaderLinks>
              <HeaderLinks
                $pathname={pathname}
                $linkName={contactLink}
                to={contactLink}
              >
                Contact
              </HeaderLinks>
            </HeaderNavStyled>

            <HeaderMenuButton onClick={handleShow}>
              <HiMenuAlt3 size={20} />
            </HeaderMenuButton>

            <HeaderOffCanvasMenu show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <HeaderLogoImage src={LogoImage} alt="pokemon-logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex flex-column">
                <HeaderNavStyledMobile>
                  <HeaderLinks
                    $pathname={pathname}
                    $linkName={homeLink}
                    to={homeLink}
                  >
                    Home
                  </HeaderLinks>
                  <HeaderLinks
                    $pathname={pathname}
                    $linkName={pokemonsLink}
                    to={pokemonsLink}
                  >
                    Pokémons
                  </HeaderLinks>
                  <HeaderLinks
                    $pathname={pathname}
                    $linkName={contactLink}
                    to={contactLink}
                  >
                    Contact
                  </HeaderLinks>
                </HeaderNavStyledMobile>

                <ImageMenuMobile src={AshPikachuImage} alt="menu-image" />
              </Offcanvas.Body>
            </HeaderOffCanvasMenu>
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  )
}

export default memo(Header)
