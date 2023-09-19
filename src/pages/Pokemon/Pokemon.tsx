import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Config from 'Config'

import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'
import { Link, useParams } from 'react-router-dom'
import { usePokemon } from 'context/PokemonContext'
import { unslugify } from 'helpers'

const Pokemon: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const {pokemon, fetchPokemon} = usePokemon()
  const { name } = useParams()

  useEffect(() => {
    if (pokemon) {
      setTitle(pokemon.name)
    }
  }, [pokemon])

  useEffect(() => {
    fetchPokemon({ variables: { name } })
  }, [])

  return (
    <>
      <h1>{ unslugify(String(name))}</h1>
      <p>página do pokemon</p>
    </>
  )
}

export default memo(Pokemon)
