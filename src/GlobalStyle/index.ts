import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        border: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        overflow-y: hidden;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    ul {
        line-height: normal;
    }

    :root {
        --blue: #98d6f0;
        --yellow: #e5b54c;
        --off-yellow: #e5b54cdb;
        --white: #fefefe;
        --off-white: #fefefeb5;
        --black: #0d1319;
        --grey: #4d4c4c;
    }
`;
