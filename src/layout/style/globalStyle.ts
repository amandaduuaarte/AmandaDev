import { createGlobalStyle } from "styled-components";
import { Screens } from "../../utils/constants";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: box-sizing;
}

body{
    font-family: 'Fira Code', monospace;
    background: ${({ theme }) => theme.colors.introBackground};
    overflow: hidden;

    @media (max-width: ${Screens.smartphone.max}px) {
        overflow: auto;
    }
}
`;
