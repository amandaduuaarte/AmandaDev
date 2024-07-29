/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import {
    Caption,
    Container,
    Content,
    Image,
    Item,
    Polaroid,
    Text,
} from "./styles";

const renderPolaroidItem = ({
    link,
    image,
    label,
}: {
    link: string;
    image: string;
    label: string;
}) => {
    return (
        <Item>
            <a href={link}>
                <Polaroid>
                    <Image src={image} />
                </Polaroid>
            </a>
            <Caption>{label}</Caption>
        </Item>
    );
};
export function MyProjects() {
    return (
        <Container>
            <Text>Blog :)</Text>
            <Content>
                {renderPolaroidItem({
                    link: "https://medium.com/@amandaduuaarte/why-you-should-make-refactors-into-your-old-projects-4907c74ff198",
                    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*vLTmNsAJPNlyv8vk6VMH1g.png",
                    label: "Why you should make refactors into your old projects?",
                })}

                {renderPolaroidItem({
                    link: "https://medium.com/@amandaduuaarte/clean-code-no-javascript-d11e440d941a",
                    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*hzXAYcivJmYyzDkRtHhkpw.jpeg",
                    label: "Clean Code no JavaScript",
                })}

                {renderPolaroidItem({
                    link: "https://medium.com/@amandaduuaarte/por-que-usar-o-styled-components-na-minha-aplica%C3%A7%C3%A3o-react-5bbde380950e",
                    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*oXlbcqS979pUXNfw.png",
                    label: " Por que usar o Styled-components na minha aplicação React ?",
                })}
            </Content>
        </Container>
    );
}
