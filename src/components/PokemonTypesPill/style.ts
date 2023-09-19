import { PokemonType } from 'Types/PokemonsType'
import styled from 'styled-components'

interface IBackgroundColorProps{
  pokemon: PokemonType
}

export const PillContainer = styled.ul<IBackgroundColorProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0;
  margin: 0;

li {
  display: flex;
  justify-content: center;
  border-radius:30%;
  width: 100px;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: ${(
    { theme, pokemon }) => (theme.background[pokemon.color] === theme.background.white ) ? theme.colorPill.white
    : theme.colorPill.default };
  list-style: none;
  margin-bottom: 5px;
  color: ${(
    { theme, pokemon }) => theme.colorText[pokemon.color] ? theme.colorText[pokemon.color]
    : theme.colorText.default };
  }
`
// if rgba(255, 255, 255, 0.2)};