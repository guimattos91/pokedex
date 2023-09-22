import { memo } from 'react'
import {
  CharacteristicSpan,
  DivCharacteristic,
  DivCharacteristicBox,
  DivContainerStyled,
  DivImageAndTypesContainer,
  DivTextTitleContainer,
  MainPokemonContainer,
  PokemonImage,
  PokemonIndexP,
  PokemonNameH1,
  RowStyled
} from './style'
import { PokemonType } from 'Types/PokemonsType'
import PokemonTypesPill from 'components/PokemonTypesPill'
import { unslugify } from 'helpers'
import { Col, Container, Row } from 'react-bootstrap'
import { LiaWeightSolid, LiaRulerVerticalSolid } from 'react-icons/lia'
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi'

import PokemonStats from 'components/PokemonStats'

interface IPokemonCardProps {
  children?: React.ReactNode
  pokemon: PokemonType
  iconSize: number
  iconColor: string
}

const MainPokemonCard: React.FC<IPokemonCardProps> = ({pokemon, iconColor, iconSize}) => {


  return(
  <MainPokemonContainer pokemon={pokemon} >
    <Container>
      <RowStyled className='g-0 shadow'>
        <Col xs={12} md={6} >
          <DivImageAndTypesContainer pokemon={pokemon}className="shadow">
            <PokemonImage
              src={`${String(pokemon.image)}.png`}
              alt={pokemon.name} />
            <PokemonTypesPill pokemon={pokemon} className='d-flex flex-row'/>
          </DivImageAndTypesContainer>
        </Col>
        <Col xs={12} md={6}>
          <DivContainerStyled>
            <DivTextTitleContainer>
              <PokemonNameH1 pokemon={pokemon}>
                {unslugify(String(pokemon.name))}
              </PokemonNameH1>
              <PokemonIndexP pokemon={pokemon}>{pokemon.pokedexIndex}</PokemonIndexP>
            </DivTextTitleContainer>

            <p>{pokemon.description}</p>
            <DivCharacteristic>

              <DivCharacteristicBox className='pe-3' >
                <CharacteristicSpan>
                  <LiaWeightSolid
                  size={iconSize}
                  color={iconColor}
                  className="me-1"
                  />{pokemon.weight}Kg
                </CharacteristicSpan>
                <p>Weight</p>
              </DivCharacteristicBox>

              <DivCharacteristicBox className='px-3' >
                <CharacteristicSpan>
                <LiaRulerVerticalSolid
                  size={iconSize}
                  color={iconColor}
                  className="me-0"
                  /> {pokemon.height}m
                </CharacteristicSpan>
                <p>Height</p>
              </DivCharacteristicBox>
              <DivCharacteristicBox className='ps-3 border border-0'>
                <CharacteristicSpan>
                  {unslugify(String(pokemon.move))}
                </CharacteristicSpan>
                <p>Major Move</p>
              </DivCharacteristicBox>
            </DivCharacteristic>
            <PokemonStats pokemon={pokemon} className="p-2" />
          </DivContainerStyled>
        </Col>
      </RowStyled>
    </Container>
  </MainPokemonContainer>
)}

export default memo(MainPokemonCard)
