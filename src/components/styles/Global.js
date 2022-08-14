import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

    * {
        border-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        font-family: 'PT Sans', sans-serif;
        font-size: 1.5em;
        margin: 0;
        display: flex;
        justify-content: center;
    }

    p:first-of-type {
        color: ${({ theme }) => theme.colors.accent};
        margin-top: 50px;
    }

    p {
        color: ${({ theme }) => theme.colors.dark};
        font-size: 20px;
        font-weight: bold;
    }

`;

export default GlobalStyles;
