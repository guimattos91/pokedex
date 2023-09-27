import { memo } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import BackgroundImage from '../../assets/BannerPikachu.png'
import {
  ButtonStyled,
  DivContainerStyled,
  MainContainer,
  PikachuImage,
  TitleH1Styled,
} from './style'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const MainHome: React.FC<IBaseComponentProps> = () => {
  const navigate = useNavigate()

  return (
    <MainContainer>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <DivContainerStyled>
              <TitleH1Styled>
                Which pokemon would you <span>choose</span>?
              </TitleH1Styled>
              <p>
                You can know the type of Pokémon, their strengths, weaknesses
                and abilities.
              </p>
            </DivContainerStyled>
            <ButtonStyled type="button" onClick={() => navigate('/pokemons')}>
              See all Pokémons
            </ButtonStyled>
          </Col>
          <Col xs={12} md={7}>
            <PikachuImage src={BackgroundImage} alt="Image" />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  )
}

export default memo(MainHome)
