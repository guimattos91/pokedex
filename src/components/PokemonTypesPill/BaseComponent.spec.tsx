import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import BaseComponent from './PokemonTypesPill'

describe('BaseComponent', () => {
  it('should render a children', () => {
    const { getByText } = render(
      <BaseComponent>
        <div>TEST</div>
      </BaseComponent>,
    )

    const children = getByText('TEST')

    expect(children).toBeTruthy()
  })
})