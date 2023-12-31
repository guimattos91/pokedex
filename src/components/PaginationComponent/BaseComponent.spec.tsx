import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import BaseComponent from './PaginationComponent'

describe('BaseComponent', () => {
  it('should render a children', () => {
    const { getByText } = render(
      <BaseComponent pokemons={[]}>
        <div>TEST</div>
      </BaseComponent>,
    )

    const children = getByText('TEST')

    expect(children).toBeTruthy()
  })
})
