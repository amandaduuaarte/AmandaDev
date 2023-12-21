/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "./styles";
import { Intro, Skills } from "../../components";
import { MyJorney } from "../../components/myJorney";

export function Home() {
    return (
        <Container>
            <Intro />
            <Skills />
            <MyJorney />
        </Container>
    );
}
