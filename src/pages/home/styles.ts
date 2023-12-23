import styled from "styled-components";
import { Screens } from "../../utils/constants";

export const Container = styled.div`
    overflow: hidden;
`;

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const IntoContainer = styled.div`
    min-height: 101vh;
    width: 100%;
    top: 0;

    @media (max-width: ${Screens.smartphone.max}px) {
        height: auto;
    }
`;

export const Canva = styled.div`
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 536px;
    height: auto;
    position: absolute;
`;
