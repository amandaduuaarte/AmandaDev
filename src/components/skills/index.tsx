import React from "react";
import { Container, Content, Tech, Text } from "./styles";

const skills = [
    "html",
    "css",
    "javascript",
    "TypeScript",
    "React js",
    "React Native",
    "NodeJS",
    "Jest",
    "Git",
    "Firebase",
];
export function Skills() {
    return (
        <Container>
            <Text size={32} bold>
                Skills
            </Text>

            <Content>
                {skills.map((skill) => (
                    <Tech>
                        <Text>{skill}</Text>
                    </Tech>
                ))}
            </Content>
        </Container>
    );
}
