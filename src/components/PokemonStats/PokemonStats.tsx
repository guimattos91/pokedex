import { memo } from 'react'
import { PokemonType } from 'Types/PokemonsType'
import { unslugify } from 'helpers'
import { DivGenderContainer, OneStatContainer, ProgressBarStats, SpanContainer, StatsContainer, TotalProgressBarStats } from './style'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi'

interface IPokemonCardProps {
  children?: React.ReactNode
  pokemon: PokemonType
  className: string
}

const PokemonStats: React.FC<IPokemonCardProps> = ({pokemon, className}) => {
  const totalStatValue = pokemon?.stats?.reduce((total, stat) => total + stat.value, 0);

  return(
    <StatsContainer pokemon={pokemon} className={className}>
      <DivGenderContainer>
        <SpanContainer>
            <span>
              Gender
            </span>
        </SpanContainer>
        <BiMaleSign color='lightblue' size={20} /> <p>{pokemon.gender?.m}%</p>
        <BiFemaleSign color='lightpink' size={20} /> <p>{pokemon.gender?.f}%</p>
      </DivGenderContainer>
      {pokemon.stats && pokemon.stats.map((stat) => (
        <OneStatContainer pokemon={pokemon} key={stat.name}>
          <SpanContainer>
            <span>
              {unslugify(stat.name)}
            </span>
            <span>
              {stat.value}
            </span>
          </SpanContainer>
            <ProgressBarStats progress={stat.value}  animated now={stat.value} />
        </OneStatContainer>
      ))}
        <OneStatContainer pokemon={pokemon}>
          <SpanContainer>
            <span>
              Total
            </span>
            <span>
              {totalStatValue}
            </span>
          </SpanContainer>
            <TotalProgressBarStats
            animated now={totalStatValue}
            max={600} />
        </OneStatContainer>
    </StatsContainer>
)}

export default memo(PokemonStats)
