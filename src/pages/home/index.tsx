/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, ContainerFooter } from "./styles";
import { Intro, Skills } from "../../components";
import { MyJorney } from "../../components/myJorney";
import { MyProjects } from "../../components/myProjects";
import { Footer } from "../../components/footer";

export function Home() {
    return (
        <Container>
            <Intro />
            <Skills />
            <MyJorney />
            <MyProjects />
        </Container>
    );
}
