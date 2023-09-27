import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { usePokemon } from 'context/PokemonContext'

import Header from 'components/Header'
import LoadingPageComponent from 'components/LoadingPageComponent'
import PaginationComponent from 'components/PaginationComponent'
import PokemonCard from 'components/PokemonCard'
import SearchComponent from 'components/SearchComponent'

import useTitle from 'hooks/useTitle'

import { StyledH1 } from './style'

const Pokemons: React.FC = () => {
  const setTitle = useTitle()
  const { pokemons, loading } = usePokemon()

  useEffect(() => {
    setTitle('Pokemons')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <StyledH1>Time to choose your Pokemon:</StyledH1>
            <SearchComponent />
          </Col>
        </Row>
      </Container>
      {loading && pokemons.length === 0 && <LoadingPageComponent />}
      {pokemons.length > 0 && (
        <PaginationComponent pokemons={pokemons}>
          <Container>
            <Row className="g-1 pb-3 pt-2">
              {pokemons.map((pokemon) => (
                <Col
                  key={pokemon.id}
                  sm={6}
                  lg={4}
                  xxl={3}
                  className="d-flex px-md-1"
                >
                  <PokemonCard pokemon={pokemon} />
                </Col>
              ))}
            </Row>
          </Container>
        </PaginationComponent>
      )}
    </>
  )
}

export default memo(Pokemons)
