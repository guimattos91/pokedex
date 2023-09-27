import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import { PokemonType } from 'Types/PokemonsType'

interface IBackgroundColorProps {
  $pokemon: PokemonType
}

export const RowStyled = styled(Row)`
  border-radius: 25px;
`

export const MainPokemonContainer = styled.main<IBackgroundColorProps>`
  display: block;
  border-radius: 25px;
  margin: 0.25rem;
  margin-bottom: 3rem;
`
export const DivImageAndTypesContainer = styled.div<IBackgroundColorProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
  background-color: ${({ theme, $pokemon }) =>
    theme.background[$pokemon.color]};
  border-radius: 1rem;
  height: 100%;

  /* &:last-child {
    justify-content: flex-end;
    align-items: end;
  } */
`
export const PokemonImage = styled.img`
  width: 90%;
  align-self: center;
`
export const PokemonNameH1 = styled.h1<IBackgroundColorProps>`
  color: ${({ theme }) => theme.colorText.ehite};
  font-weight: 700;
  margin: 0;
  padding: 0;
`
export const PokemonIndexP = styled.p<IBackgroundColorProps>`
  color: ${({ theme, $pokemon }) =>
    theme.indexColor[$pokemon.color]
      ? theme.indexColor[$pokemon.color]
      : theme.indexColor.default};
  font-weight: 300;
  margin: 0;
  padding: 0;
  opacity: 0.7;
  font-size: 1.5rem;
`
export const DivContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const DivTextTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`

export const DivCharacteristic = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const DivCharacteristicBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid lightgrey;
  p {
    font-size: 0.75rem;
    color: grey;
    margin: 0;
  }
`

export const CharacteristicSpan = styled.span`
  font-weight: 700;
`
