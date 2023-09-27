import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import BaseComponent from './MainPokemonCard'

describe('BaseComponent', () => {
  it('should render a children', () => {
    const { getByText } = render(
      <BaseComponent
        pokemon={{
          id: 0,
          pokedexIndex: '',
          name: '',
          height: undefined,
          weight: undefined,
          color: '',
          types: [],
          gender: undefined,
          description: undefined,
          image: null,
          move: undefined,
          stats: undefined,
        }}
        iconSize={0}
        iconColor=""
      >
        <div>TEST</div>
      </BaseComponent>,
    )

    const children = getByText('TEST')

    expect(children).toBeTruthy()
  })
})
