import { memo } from 'react'

import PokeBall from '../../assets/pokeball.png'
import { DivContainer, PokeballImageContainer } from './style'
import 'animate.css'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const LoadingPageComponent: React.FC<IBaseComponentProps> = () => (
  <DivContainer>
    <PokeballImageContainer
      src={PokeBall}
      alt="loading"
      className="animate__animated animate__bounce animate__infinite"
    />
  </DivContainer>
)

export default memo(LoadingPageComponent)
