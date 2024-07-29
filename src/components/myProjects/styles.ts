import styled from "styled-components";
import { Colors, Screens } from "../../utils/constants";

export const Container = styled.div``;

export const Text = styled.p`
    color: ${Colors.texts.primary};
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    margin-top: 8rem;

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
    height: 280px;
    width: 25%;
    background: ${Colors.primarys.gray};
    border-radius: 24px;
    border: 10px solid white;

    @media (max-width: ${Screens.smartphone.max}px) {
        height: 200px;
        width: 80%;
    }
    @media (max-width: ${Screens.tablet.max}px) {
        height: 200px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Item = styled.div`
    width: 30%;
    background: #fff;
    display: inline-block;
    margin-top: 2rem;
    transform: scale(0.8, 0.8) rotate(5deg);
    transition: all 0.35s;
    filter: grayscale(100%);
    color: ${Colors.texts.primary};
    &&:hover {
        filter: none;
        transform: scale(1, 1) rotate(0deg) !important;
        transition: all 0.35s;
        color: ${Colors.texts.blueLight};
        font-weight: 700;
    }
    &&:nth-of-type(4n + 1) {
        transform: scale(0.8, 0.8) rotate(5deg);
        transition: all 0.35s;
    }
    &&:nth-of-type(4n + 2) {
        transform: scale(0.8, 0.8) rotate(0deg);
        transition: all 0.35s;
    }
    &&:nth-of-type(4n + 4) {
        transform: scale(0.8, 0.8) rotate(0deg);
        transition: all 0.35s;
    }

    @media (max-width: ${Screens.smartphone.max}px) {
        width: 80%;
    }

    a {
        text-decoration: none;
    }
`;

export const Polaroid = styled.div`
    display: flex;
    background: #fff;
    padding: 1rem;
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
    align-self: center;
    justify-content: center;
    text-align: center;

    &&:before {
        transform: rotate(4deg);
        height: 20%;
        width: 47%;
        bottom: 30px;
        right: 12px;
        box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.3);
    }
`;

export const Caption = styled.div`
    font-size: 1.2rem;
    text-align: center;
    line-height: 2em;
    align-self: center;
    justify-content: center;
`;

export const Header = styled.div``;
