/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Image, Text } from "./styles";
import MeIlustration from "../../assets/images/me.png";
import Waves from "../../assets/icons/waves.svg";

export function Home() {
    return (
        <Container>
            <Image src={MeIlustration} alt="ilustration_me" />
            <Image src={Waves} alt="waves" width={60} />
            <Text>Hi. I'm Amanda. Software Developer.</Text>
        </Container>
    );
}
