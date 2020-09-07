import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props=>props.theme.colors.background};
    font-size: 14px;
    color: ${props=>props.theme.colors.textPrimary};
    font-family: Arial, Helvetica, sans-serif;
  }

  .theme {
    margin: 100px;
    text-align: center;
  }
`;