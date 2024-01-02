import styled from "styled-components";
import { Colors, Screens } from "../../utils/constants";

interface ImageProps {
    height?: number;
    width?: number;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.colors.introBackground};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    @media (max-width: ${Screens.smartphone.max}px) {
        flex-direction: column;
    }
`;

export const ImageIllustration = styled.img<ImageProps>`
    height: ${({ height }) => height || 28}rem;
    width: ${({ height }) => height || 28}rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        margin: 4rem;
    }
`;

export const Text = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    text-align: justify;
`;

export const SocialMedias = styled.div`
    height: 240px;
    width: 50px;
    background: ${({ theme }) => theme.colors.sideBar};
    display: flex;
    padding: 6px;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 12px;

    @media (max-width: ${Screens.smartphone.max}px) {
        border-radius: 0;
    }
`;

export const SocialMediaItem = styled.img`
    height: 32px;
    width: 32px;
`;

export const IntroCard = styled.div`
    display: flex;
    height: 400px;
    width: 45%;
    background: ${({ theme }) => theme.colors.introCard};
    border: 4px solid;
    box-shadow: 10px 12px ${({ theme }) => theme.colors.boxShadow};
    padding: 32px;
    align-items: center;
    justify-content: center;
`;
