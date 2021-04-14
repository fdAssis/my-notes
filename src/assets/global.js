import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html, body, #root{
  height: 100%;
}

body {
  font: 14px;
  background: #ecf1f8;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
}

ul {
  list-style: none;
}
`;
