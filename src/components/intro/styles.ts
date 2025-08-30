import styled from "styled-components";
import { Colors, Screens } from "../../utils/constants";

interface ImageProps {
    height?: number;
    width?: number;
}

interface CheckboxProps {
    isChecked: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
`;

export const ImageIlustration = styled.img<ImageProps>`
    height: 12rem;
    width: 12rem;
    margin: 2rem;

    @media (max-width: ${Screens.smartphone.max}px) {
        margin: 4rem;
    }
`;

export const Text = styled.p`
    color: ${Colors.texts.primary};
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
`;

export const ContainerCheckBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Checkbox = styled.div<CheckboxProps>`
    display: flex;
    height: 1rem;
    width: 1rem;
    border-radius: 2px;
    background-color: ${({ isChecked }) =>
        isChecked ? Colors.primary.purpleLight : Colors.primary.white};
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`;

export const ContainerLang = styled.div`
    width: 220px;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    text-align: center;
    justify-content: space-around;
`;

export const Label = styled.p`
    color: ${Colors.texts.white};
    font-size: 0.9rem;
`;

export const SocialMedias = styled.div`
    height: 240px;
    width: 50px;
    background: ${({ theme }) => theme.colors.sideBar};
    align-self: left;
    margin-top: 10px;
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

export const Row = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 4fr 1fr 4fr;
    width: 100vw;
    align-items: center;
`;

export const SeeMoreContainer = styled.div`
    display: flex;
    margin-top: 5%;
    width: 40%;
    align-items: center;
    justify-content: center;
`;

export const SeeMoreButton = styled.button`
    width: 220px;
    height: 60px;
    border: none;
    border-radius: 16px;
    background-color: ${Colors.primary.white};
    color: ${Colors.texts.primary};
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;

    &&:hover {
        background-color: ${Colors.primary.gray};
    }
`;
