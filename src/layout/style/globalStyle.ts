import { createGlobalStyle } from "styled-components";
import { Colors } from "../../utils/constants/colors";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: box-sizing;
}

body{
    background: ${Colors.primarys.black};
    font-family: 'Fira Code', monospace;
}
`;
