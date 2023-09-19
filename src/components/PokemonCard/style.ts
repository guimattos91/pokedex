import { PokemonType } from 'Types/PokemonsType'
import styled from 'styled-components'

interface IBackgroundColorProps{
  pokemon: PokemonType
}

export const Card = styled.div<IBackgroundColorProps>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 25px;
  background-color: ${({ theme, pokemon }) => theme.background[pokemon.color]};
  padding: 1rem 2rem;
  position: relative;
  margin: 0.25rem;
    :hover {
      @keyframes createBox {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(2);
    }
    };
  }
`
export const DivImageAndTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5 0;
`
export const PokemonImage = styled.img`
    width: 100px;
    z-index: 1;
`
export const PokemonNameH2 = styled.h2<IBackgroundColorProps>`
  color: ${(
    { theme, pokemon }) => theme.colorText[pokemon.color] ? theme.colorText[pokemon.color]
    : theme.colorText.default };
  font-weight: 700;
  margin: 0;
  padding: 0;
`
export const PokemonIndexP = styled.p<IBackgroundColorProps>`
  color: ${(
    { theme, pokemon }) => theme.indexColor[pokemon.color] ? theme.indexColor[pokemon.color]
    : theme.indexColor.default };
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
export const DivContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`