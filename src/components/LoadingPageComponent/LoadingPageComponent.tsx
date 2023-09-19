import { memo, ReactElement } from 'react'
import { DivContainer, PokeballImageContainer } from './style'
import PokeBall from '../../assets/pokeball.png'
import 'animate.css';

interface IBaseComponentProps {
  children?: React.ReactNode
}

const LoadingPageComponent: React.FC = () => (
  <DivContainer>
    <PokeballImageContainer
      src={PokeBall}
      alt='loading'
      className='animate__animated animate__bounce animate__infinite'
      />
  </DivContainer>

)

export default memo(LoadingPageComponent)
