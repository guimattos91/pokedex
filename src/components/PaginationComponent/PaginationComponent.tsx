import { memo } from 'react'

import 'animate.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PokemonType } from 'Types/PokemonsType'

import { usePokemon } from 'context/PokemonContext'

import LoadingPageComponent from 'components/LoadingPageComponent'

interface IBaseComponentProps {
  children?: React.ReactNode
  pokemons: PokemonType[]
}

const PaginationComponent: React.FC<IBaseComponentProps> = ({
  children,
  pokemons,
}) => {
  const { fetchNextPage, hasMorePages } = usePokemon()

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={fetchNextPage}
      inverse={false} //
      hasMore={hasMorePages}
      loader={<LoadingPageComponent />}
    >
      {children}
    </InfiniteScroll>
  )
}

export default memo(PaginationComponent)
