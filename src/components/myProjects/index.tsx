import React from "react";
import {
    Caption,
    Card,
    Container,
    Content,
    Header,
    Image,
    Item,
    Polaroid,
    Text,
} from "./styles";

export function MyProjects() {
    return (
        <Container>
            <Text>Blog :)</Text>
            <Content>
                <Item>
                    <a href="https://medium.com/@amandaduuaarte/configurar-eslint-e-prettier-em-um-projeto-node-js-com-typescript-4896a85b84d7">
                        <Polaroid>
                            <Image src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*rDai19PmXKGQ-jJF39ytEQ.png" />
                        </Polaroid>
                        <Caption>
                            Configurar ESLint e Prettier em um projeto Node.js
                            com TypeScript
                        </Caption>
                    </a>
                </Item>
                <Item>
                    <a href="https://medium.com/@amandaduuaarte/why-you-should-make-refactors-into-your-old-projects-4907c74ff198">
                        <Polaroid>
                            <Image src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*vLTmNsAJPNlyv8vk6VMH1g.png" />
                        </Polaroid>
                        <Caption>
                            Why you should make refactors into your old
                            projects?
                        </Caption>
                    </a>
                </Item>
                <Item>
                    <a href="https://medium.com/@amandaduuaarte/por-que-usar-o-styled-components-na-minha-aplica%C3%A7%C3%A3o-react-5bbde380950e">
                        <Polaroid>
                            <Image src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*oXlbcqS979pUXNfw.png" />
                        </Polaroid>
                        <Caption>
                            Por que usar o Styled-components na minha aplicação
                            React ?
                        </Caption>
                    </a>
                </Item>
            </Content>
            <Text>Alguns dos meus Projetos</Text>
            <Content>
                <Card>
                    <Header />
                </Card>
                <Card />
                <Card />
            </Content>
        </Container>
    );
}
