import styled from 'styled-components'
import { PokemonType } from 'Types/PokemonsType'

interface IBackgroundColorProps {
  pokemon: PokemonType
}

export const Card = styled.div<IBackgroundColorProps>`
  display: block;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 25px;
  background-color: ${({ theme, pokemon }) => theme.background[pokemon.color]};
  position: relative;
  margin-bottom: 0.25rem;
  padding: 0.75rem 1.5rem;

  @media (min-width: 768px) {
    &:hover {
      z-index: 2;
      transform: scale(1.03);
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    }
  }
`
export const DivImageAndTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
`
export const PokemonImage = styled.img`
  width: 100px;
  z-index: 1;
`
export const PokemonNameH2 = styled.h2<IBackgroundColorProps>`
  color: ${({ theme, pokemon }) =>
    theme.colorText[pokemon.color]
      ? theme.colorText[pokemon.color]
      : theme.colorText.default};
  font-weight: 700;
  margin: 0;
  padding: 0;
`
export const PokemonIndexP = styled.p<IBackgroundColorProps>`
  color: ${({ theme, pokemon }) =>
    theme.indexColor[pokemon.color]
      ? theme.indexColor[pokemon.color]
      : theme.indexColor.default};
  font-weight: 300;
  margin: 0;
  padding: 0;
  opacity: 0.7;
  font-size: 1.5rem;
`
export const DivTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
