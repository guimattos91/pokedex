import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Config from 'Config'

import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'
import { usePokemon } from 'context/PokemonContext'
import PaginationComponent from 'components/PaginationComponent'
import Header from 'components/Header'
import PokemonCard from 'components/PokemonCard'
import { Col, Container, Row } from 'react-bootstrap'
import { StyledH1 } from './style'

const Pokemons: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const {pokemons, loading} = usePokemon()

  useEffect(() => {
    setTitle('Pokemons')
  }, [])

  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <StyledH1>Time to choose your Pokemon:</StyledH1>
        </Col>
      </Row>
    </Container>
      {loading && pokemons.length === 0 && <p>loading</p>}
      {pokemons.length > 0 && (
          <PaginationComponent pokemons={pokemons}>
            <Container>
              <Row className="g-1">
                {pokemons.map((pokemon)=>
                  <Col sm={6} lg={4} xxl={3}>
                    <PokemonCard pokemon={pokemon} />
                  </Col>
                  )}
              </Row>
            </Container>
          </PaginationComponent>
      )}
    </>
  )
}

export default memo(Pokemons)
