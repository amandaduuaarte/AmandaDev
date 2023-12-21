import styled from "styled-components";
import { Colors, Screens } from "../../utils/constants";

interface TextProps {
    color?: string;
    size?: number;
    bold?: boolean;
}

interface HistoryContainerProps {
    align?: string;
}

interface ImageProps {
    size?: number;
}

interface ArrowContainerProps {
    direction?: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 6rem 12rem;
    text-align: center;
    justify-content: center;

    @media (max-width: ${Screens.smartphone.max}px) {
        margin: 2rem 0;
    }
`;

export const Content = styled.div`
    margin: 2rem 0;
`;

export const Text = styled.p<TextProps>`
    color: ${({ color }) => color || Colors.texts.blueLight};
    font-size: ${({ size }) => size || 12}px;
    font-weight: ${({ bold }) => (bold ? 700 : 400)};
`;

export const HistoryContainer = styled.div<HistoryContainerProps>`
    display: flex;
    align-self: ${({ align }) => align || "flex-start"};
    width: 22rem;
    margin: 2rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        align-self: center;
        text-align: center;
        margin: 1rem 2rem;
        font-size: 16px;
    }
`;

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: ${Screens.smartphone.max}px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const JobTech = styled(ExperienceContainer)`
    align-self: flex-start;
    gap: 1rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        flex-direction: column;
        align-self: center;
    }
`;

export const ExperienceContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    text-align: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: auto;
    justify-content: space-between;
    text-align: start;
    margin-bottom: 2rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        text-align: center;
        align-self: center;
    }
`;

export const CardContent = styled.div`
    background-color: ${Colors.primarys.gray};
    width: 12rem;
    height: 6rem;
    border-radius: 12px;
    margin-top: 2rem;
    flex-wrap: wrap;
    color: ${Colors.texts.white};
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
`;

export const JobDescription = styled.div`
    width: 50%;
    padding-top: 1rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        width: 100%;
    }

    @media (max-width: ${Screens.tablet.max}px) {
        width: 100%;
    }
`;

export const Image = styled.img<ImageProps>`
    height: ${({ size }) => size || 12}rem;
    width: auto;

    @media (max-width: ${Screens.smartphone.max}px) {
        height: 4rem;
    }
    @media (max-width: ${Screens.tablet.max}px) {
        background: red;
        display: none;
    }
`;

export const ArrowContainer = styled.div<ArrowContainerProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};

    @media (max-width: ${Screens.smartphone.max}px) {
        flex-direction: column;
    }

    @media (max-width: ${Screens.tablet.max}px) {
        flex-direction: column;
    }
`;

export const WorksContainer = styled.div`
    width: 70rem;
    align-self: center;

    @media (max-width: ${Screens.smartphone.max}px) {
        width: 100%;
    }

    @media (max-width: ${Screens.tablet.max}px) {
        width: 100%;
        flex-flow: column;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`;
