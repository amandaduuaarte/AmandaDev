/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
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
                    <a href="https://medium.com/@amandaduuaarte/why-you-should-make-refactors-into-your-old-projects-4907c74ff198">
                        <Polaroid>
                            <Image src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*vLTmNsAJPNlyv8vk6VMH1g.png" />
                        </Polaroid>
                    </a>
                    <Caption>
                        Why you should make refactors into your old projects?
                    </Caption>
                </Item>

                <Item>
                    <a href="https://medium.com/@amandaduuaarte/clean-code-no-javascript-d11e440d941a">
                        <Polaroid>
                            <Image src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*hzXAYcivJmYyzDkRtHhkpw.jpeg" />
                        </Polaroid>
                    </a>
                    <Caption>Clean Code no JavaScript</Caption>
                </Item>

                <Item>
                    <a href="https://medium.com/@amandaduuaarte/por-que-usar-o-styled-components-na-minha-aplica%C3%A7%C3%A3o-react-5bbde380950e">
                        <Polaroid>
                            <Image src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*oXlbcqS979pUXNfw.png" />
                        </Polaroid>
                    </a>
                    <Caption>
                        Por que usar o Styled-components na minha aplicação
                        React ?
                    </Caption>
                </Item>
            </Content>
            <Text>Alguns dos meus Projetos</Text>

            <Card>
                {/* <Header /> */}

                {/* <iframe
                    src="https://giphy.com/embed/WdSJEXG8ULoyZA4qc5"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                /> */}
            </Card>
            <Card />
            <Card />
        </Container>
    );
}
