import { memo } from 'react'
import { PokemonType } from 'Types/PokemonsType'
import { PillContainer } from './style'
import { unslugify } from 'helpers'

interface IPokemonCardProps {
  children?: React.ReactNode
  pokemon: PokemonType
  className: string
}

const PokemonTypesPill: React.FC<IPokemonCardProps> = ({pokemon, className}) => {


  return(
    <PillContainer pokemon={pokemon} className={className}>
      {pokemon.types.map((type) => <li key={type}>{unslugify(type)}</li>)}
    </PillContainer>
)}

export default memo(PokemonTypesPill)
