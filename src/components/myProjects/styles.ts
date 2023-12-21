import styled from "styled-components";
import { Colors, Screens } from "../../utils/constants";

export const Container = styled.div``;

export const Text = styled.p`
    color: ${Colors.texts.primary};
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;

    @media (max-width: ${Screens.smartphone.max}px) {
        font-size: 2rem;
    }
`;

export const Content = styled.div`
    display: flex;
    margin: 4% 0;
    flex-flow: row;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;

    @media (max-width: ${Screens.smartphone.max}px) {
        flex-flow: column;
        align-items: center;
    }
`;

export const Card = styled.div`
    height: 400px;
    width: 30%;
    background: ${Colors.primarys.gray};
    border-radius: 24px;

    @media (max-width: ${Screens.smartphone.max}px) {
        height: 200px;
        width: 80%;
    }
    @media (max-width: ${Screens.tablet.max}px) {
        height: 200px;
    }
`;
