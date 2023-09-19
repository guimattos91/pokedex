import { memo, ReactElement } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/BannerPikachu.png'
import { PokemonType } from 'Types/PokemonsType'
import { PillContainer } from './style'
import { unslugify } from 'helpers'

interface IPokemonCardProps {
  children?: React.ReactNode
  pokemon: PokemonType
}

const PokemonTypesPill: React.FC<IPokemonCardProps> = ({pokemon}) => {


  return(
    <PillContainer pokemon={pokemon}>
      {pokemon.types.map((type) => <li key={type}>{unslugify(type)}</li>)}
    </PillContainer>
)}

export default memo(PokemonTypesPill)
