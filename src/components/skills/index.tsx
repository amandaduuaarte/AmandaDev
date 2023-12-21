import React from "react";
import { Container, Content, Tech, Text } from "./styles";

export function Skills() {
    const skills = [
        "html",
        "css",
        "javascript",
        "TypeScript",
        "React js",
        "React Native",
        "NodeJS",
    ];
    return (
        <Container>
            <Text size={32} bold>
                Techs
            </Text>

            <Content>
                {skills.map((skill) => (
                    <Tech>{skill}</Tech>
                ))}
                {/* Aqui na versão do mobile add show more chevron down e também na
                minha experiencia */}
            </Content>
        </Container>
    );
}
