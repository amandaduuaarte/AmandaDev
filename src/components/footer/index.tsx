import React from "react";
import { Container, Content, Description, Line, Text } from "./styles";

export function Footer() {
    return (
        <Container>
            <>
                <Text>Contact me</Text>
                <Line />
            </>
            <Content>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas labore sunt reiciendis saepe, consequatur beatae
                    repellat asperiores. Adipisci sequi officiis libero, harum
                    doloribus et fuga perferendis culpa nulla dignissimos quod?{" "}
                </Description>
            </Content>
        </Container>
    );
}
