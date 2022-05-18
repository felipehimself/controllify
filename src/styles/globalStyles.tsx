import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  /* font-family: 'Roboto', sans-serif; */
}

body {
  background-color: #f3f2f1;
}

select,
input,
button,
option {
  font-family: inherit;
}


`

export default GlobalStyles