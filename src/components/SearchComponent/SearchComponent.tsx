import { useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { BiSearchAlt } from 'react-icons/bi'

import { usePokemon } from 'context/PokemonContext'

import { InputButtonStyled, InputContainer, SearchInput } from './style'

interface IPokemonCardProps {
  children?: React.ReactNode
}

const SearchComponent: React.FC<IPokemonCardProps> = () => {
  const { setSearchPokemons } = usePokemon()
  const { register, watch, setValue } = useForm<{ search: string }>()
  const inputText = watch('search')

  const handleSearch = useCallback(() => {
    if (inputText.length < 3) return
    setSearchPokemons(inputText)
  }, [setSearchPokemons, inputText])

  const handleClearSearch = useCallback(async () => {
    setSearchPokemons('')
    setValue('search', '')
  }, [setSearchPokemons, setValue])

  return (
    <InputContainer className="shadow">
      <SearchInput
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('search')}
        placeholder="Search Pokemon"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
      />
      {inputText?.length > 0 && (
        <InputButtonStyled
          type="button"
          onClick={handleClearSearch}
          className="me-2"
        >
          x
        </InputButtonStyled>
      )}
      <InputButtonStyled type="button" onClick={() => handleSearch()}>
        <BiSearchAlt />
      </InputButtonStyled>
    </InputContainer>
  )
}

export default SearchComponent
