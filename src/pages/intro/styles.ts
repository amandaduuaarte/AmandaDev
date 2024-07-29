import styled from "styled-components";
import { Screens } from "../../utils/constants";

interface ImageProps {
    height?: number;
    width?: number;
}

interface TextProps {
    size?: number;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.colors.introBackground};
    justify-content: center;
    align-items: center;
    padding: 0 10%;
`;

export const Header = styled.div`
    background: ${({ theme }) => theme.colors.introBackground};
    height: 8px;
    padding: 0 20rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        display: none;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-bottom: 32px;

    @media (max-width: ${Screens.smartphone.max}px) {
        flex-direction: column;
    }
`;

export const ImageIllustration = styled.img<ImageProps>`
    height: ${({ height }) => height || 28}rem;
    width: ${({ height }) => height || 28}rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        margin: 4rem;
        height: auto;
        width: 100%;
    }
`;

export const Text = styled.p<TextProps>`
    font-size: ${({ size }) => size || 2}rem;
    font-weight: 600;
    text-align: justify;
    color: ${({ theme }) => theme.colors.black};
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
        flex-flow: row;
        height: auto;
        width: 100%;
        margin-bottom: 32px;
    }
`;

export const SocialMediaItem = styled.img`
    height: 32px;
    width: 32px;
`;

export const IntroCard = styled.div`
    display: flex;
    height: 300px;
    flex-direction: column;
    width: 35%;
    background: ${({ theme }) => theme.colors.introCard};
    border: 4px solid;
    box-shadow: 10px 12px ${({ theme }) => theme.colors.boxShadow};
    padding: 32px;
    align-items: center;
    justify-content: center;

    @media (max-width: ${Screens.smartphone.max}px) {
        height: auto;
        width: 100%;
        font-size: 1rem;
    }
`;

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: left;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`;

export const AboutMe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
`;

export const PhaseContainer = styled.div`
    height: auto;
    width: 60%;
    background: ${({ theme }) => theme.colors.boxShadow};
    display: flex;
    align-items: center;
    padding: 32px;
    p {
        color: ${({ theme }) => theme.colors.phrase};
    }
`;
