import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

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
    a:active {
        font-weight: 700;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
    display: none;
  }
`