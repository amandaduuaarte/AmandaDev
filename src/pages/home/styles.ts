import styled from "styled-components";
import { Colors, Screens } from "../../utils/constants";

interface ImageProps {
    height?: number;
    width?: number;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
`;

export const Image = styled.img<ImageProps>`
    height: ${({ height }) => height || 16}rem;
    width: ${({ width }) => width || 16}rem;
    margin: 2rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        height: ${({ height }) => height || 60}%;
        width: ${({ width }) => width || 60}%;
        margin: 4rem;
    }

    @media (max-width: ${Screens.tablet.max}px) {
        height: ${({ height }) => height || 80}%;
        width: ${({ width }) => width || 80}%;
    }
`;

export const Text = styled.p`
    color: ${Colors.texts.primary};
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;

    @media (max-width: ${Screens.smartphone.max}px) {
        font-size: 2.2rem;
    }
`;
