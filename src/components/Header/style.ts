import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ILinkStyledProps {
  $pathname: string
  $linkName: string
}

export const HeaderContainer = styled.header`
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0;
  margin: 0 0 2rem 0;
`

export const HeaderLogoImage = styled.img`
  max-height: 60px;
  margin: 1.5em 0;
`

export const HeaderNavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 1.5rem;

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    display: none;
  }
`
export const HeaderNavStyledMobile = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: 1.5rem;
  flex-grow: 1;

  a {
    padding-bottom: 2rem;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
export const ImageMenuMobile = styled.img`
  max-width: 100%;
  display: flex;
  align-self: baseline;
`

export const HeaderMenuButton = styled.button`
  display: none;
  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  text-align: right;
  text-decoration: none;
  text-indent: 0;
  color: rgba(0, 0, 0, 0.75);

  :active {
    background: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-end;
  }
`

export const HeaderOffCanvasMenu = styled(Offcanvas)`
  max-width: 80%;
  display: none;

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`
export const HeaderLinks = styled(Link)<ILinkStyledProps>`
  font-weight: ${({ $pathname, $linkName }) =>
    $pathname === $linkName ? 700 : 400};
  text-decoration: ${({ $pathname, $linkName }) =>
    $pathname === $linkName ? 'underline' : 'normal'};
`
