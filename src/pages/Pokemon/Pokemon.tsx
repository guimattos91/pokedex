import { memo, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { usePokemon } from 'context/PokemonContext'

import Header from 'components/Header'
import LoadingPageComponent from 'components/LoadingPageComponent'
import MainPokemonCard from 'components/MainPokemonCard'

import useTitle from 'hooks/useTitle'

const Pokemon: React.FC = () => {
  const setTitle = useTitle()
  const { pokemon, fetchPokemon, pokemonLoading } = usePokemon()
  const { name } = useParams()

  useEffect(() => {
    if (pokemon) {
      setTitle(pokemon.name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon])

  useEffect(() => {
    fetchPokemon({ variables: { name } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <>
      <Header />
      {pokemonLoading && <LoadingPageComponent />}
      {!pokemonLoading && pokemon && (
        <MainPokemonCard pokemon={pokemon} iconColor="inherit" iconSize={20} />
      )}
    </>
  )
}

export default memo(Pokemon)
