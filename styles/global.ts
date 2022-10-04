import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --text: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    transition: all 0.5s;
  }

  html {
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    outline: none;
    border:1px solid;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default GlobalStyle