import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Config from 'Config'

import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'
import { Link, useParams } from 'react-router-dom'
import { usePokemon } from 'context/PokemonContext'
import { unslugify } from 'helpers'
import MainPokemonCard from 'components/MainPokemonCard'
import Header from 'components/Header'

const Pokemon: React.FC = () => {
  const setTitle = useTitle()
  const {pokemon, fetchPokemon, pokemonLoading} = usePokemon()
  const { name } = useParams()


  useEffect(() => {
    if (pokemon) {
      setTitle(pokemon.name)
    }
  }, [pokemon])

  useEffect(() => {
      fetchPokemon({ variables: { name: name } })
  }, [name])

 
  console.log(pokemon)
  return (
    <>
      <Header />
      {pokemonLoading && <p>loading</p>}
      {!pokemonLoading && pokemon &&
      <MainPokemonCard pokemon={pokemon}
      iconColor='inherit' iconSize={20} /> }
    </>
  )
}

export default memo(Pokemon)
