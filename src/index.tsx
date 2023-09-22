import React, { Suspense } from 'react'
import { ApolloProvider } from '@apollo/client'

import ReactDOM from 'react-dom/client'

import 'services/i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import GraphQLClient from 'services/GraphQL'
import GlobalStyle from 'style/GlobalStyles'
import { PokemonProvider } from 'context/PokemonContext'
import { ThemeProvider } from 'styled-components'
import { pokemonThemed } from 'style/Theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ApolloProvider client={GraphQLClient}>
        <ThemeProvider theme={pokemonThemed}>
          <GlobalStyle />
          <PokemonProvider>
            <App />
          </PokemonProvider>
        </ThemeProvider>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
)
