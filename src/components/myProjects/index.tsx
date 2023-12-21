import React from "react";
import { Card, Container, Content, Text } from "./styles";

export function MyProjects() {
    return (
        <Container>
            <Text>Alguns dos meus Projetos :)</Text>
            <Content>
                <Card />
                <Card />
                <Card />
            </Content>

            <Text>Blog</Text>
            <Content>
                <Card />
                <Card />
                <Card />
            </Content>
        </Container>
    );
}
