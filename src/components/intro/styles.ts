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

export const Image = styled.img<ImageProps>`
    width: 50%;
    margin: -1rem;
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
        isChecked ? Colors.primarys.purpleLight : Colors.primarys.white};
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
