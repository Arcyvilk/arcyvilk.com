import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    height: 100vh;
    vertical-align: baseline;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Dosis', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3, h4 {
    padding: 16px;
    margin: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 4em;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.15em;
  }
  h2 {
    letter-spacing: 0.2em;
    font-size: 2em;
  }
  h3 {
    letter-spacing: 0;
    font-size: 1.5em;
    font-weight: 500;
  }
  h4 {
    letter-spacing: 0;
    font-size: 1.5em;
    font-weight: 400;
  }
`;

export default GlobalStyle;
