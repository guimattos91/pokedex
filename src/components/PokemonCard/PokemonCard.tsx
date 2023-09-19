import { memo } from 'react'
import { Card, DivImageAndTypesContainer, DivTitleContainer, PokemonImage, PokemonIndexP, PokemonNameH2 } from './style'
import { PokemonType } from 'Types/PokemonsType'
import PokemonTypesPill from 'components/PokemonTypesPill'
import { unslugify } from 'helpers'
import { Link } from 'react-router-dom'

interface IPokemonCardProps {
  children?: React.ReactNode
  pokemon: PokemonType
}

const PokemonCard: React.FC<IPokemonCardProps> = ({pokemon}) => {


  return(
    <Card pokemon={pokemon}>
          <DivTitleContainer>
            <Link to={`/pokemon/${pokemon.name}`}>
              <PokemonNameH2 pokemon={pokemon}>
                {unslugify(pokemon.name)}
              </PokemonNameH2>
            </Link>
            <PokemonIndexP pokemon={pokemon}>{pokemon.pokedexIndex}</PokemonIndexP>
          </DivTitleContainer>
          <DivImageAndTypesContainer>
            <PokemonTypesPill pokemon={pokemon} />
            <Link to={`/pokemon/${pokemon.name}`} className="stretched-link">
              <PokemonImage
                src={`${String(pokemon.image)}.png`}
                alt={pokemon.name} />
            </Link>
          </DivImageAndTypesContainer>
    </Card>
)}

export default memo(PokemonCard)
