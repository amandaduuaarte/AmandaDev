/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "./styles";
import { Intro, Skills } from "../../components";

export function Home() {
    return (
        <Container>
            <Intro />
            <Skills />
        </Container>
    );
}
