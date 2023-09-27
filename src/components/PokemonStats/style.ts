import ProgressBar from 'react-bootstrap/ProgressBar'
import styled from 'styled-components'
import { PokemonType } from 'Types/PokemonsType'

interface IBackgroundColorProps {
  pokemon: PokemonType
}

interface IProgressBarProps {
  progress: number
}

export const StatsContainer = styled.div<IBackgroundColorProps>`
  display: flex;
  flex-direction: column;
`
export const OneStatContainer = styled.div<IBackgroundColorProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`
export const DivGenderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;

  p {
    margin: 0;
    font-weight: 700;
  }
`
export const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 45%;
`

export const ProgressBarStats = styled(ProgressBar)<IProgressBarProps>`
  width: 50%;
  height: 5px;
  --bs-progress-bar-bg: ${({ progress }) =>
    progress >= 50 ? '#48D0B0' : '#FB6C6C'};
`

export const TotalProgressBarStats = styled(ProgressBar)`
  width: 50%;
  height: 5px;
`
