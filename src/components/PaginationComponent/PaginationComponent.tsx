import { memo, ReactElement } from 'react'
import { DivContainer, PokeballImageContainer } from './style'
import PokeBall from '../../assets/pokeball.png'
import 'animate.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingPageComponent from 'components/LoadingPageComponent';
import { PokemonType } from 'Types/PokemonsType';
import { usePokemon } from 'context/PokemonContext';

interface IBaseComponentProps {
  children?: React.ReactNode
  pokemons: PokemonType[]
}

const PaginationComponent: React.FC<IBaseComponentProps> = ({children, pokemons}) => {
  const { fetchNextPage } = usePokemon()

  return(
<InfiniteScroll
    dataLength={pokemons.length}
    next={fetchNextPage}
    inverse={false} //
    hasMore={true}
    loader={<LoadingPageComponent />}
  >
    { children }
  </InfiniteScroll>

)}

export default memo(PaginationComponent)
