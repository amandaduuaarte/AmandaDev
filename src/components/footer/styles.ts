import styled from "styled-components";
import { Colors } from "../../utils/constants";

export const Container = styled.div`
    background: ${Colors.primarys.gray};
    height: 40vh;
    width: 80%;
    padding: 24px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    border-radius: 16px;
    margin-top: 10%;
`;

export const Content = styled.div`
    flex-flow: column;
`;

export const Text = styled.p`
    color: ${Colors.texts.blueLight};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
`;

export const Description = styled(Text)`
    font-size: 1rem;
    color: ${Colors.texts.greenLight};
    width: 100%;
    text-align: center;
    font-weight: 400;
    align-self: center;
`;

export const Line = styled.div`
    border-bottom: 4px solid ${Colors.secondarys.greenLight};
    width: 200px;
    height: 4px;
    align-self: center;
    margin-bottom: 8%;
`;
