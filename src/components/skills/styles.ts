import styled from "styled-components";
import { Colors, Screens } from "../../utils/constants";

interface TextProps {
    size?: number;
    bold?: boolean;
}
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${Colors.texts.white};
    margin-top: 2rem;
`;

export const Content = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;

    @media (max-width: ${Screens.smartphone.max}px) {
        flex-direction: column;
    }
`;

export const Text = styled.p<TextProps>`
    color: ${Colors.texts.white};
    font-size: ${({ size }) => size || 12}px;
    font-weight: ${({ bold }) => (bold ? 700 : 400)};
`;

export const Tech = styled.div`
    border-radius: 7.5rem;
    margin-top: 2rem;
    border: 4px solid #dba6f4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 45px;
    width: auto;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
        border: 4px solid ${Colors.primarys.purpleLight};
    }
`;
