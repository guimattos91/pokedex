import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles
