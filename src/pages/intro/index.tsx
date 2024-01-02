/* eslint-disable react/no-unescaped-entities */
import React from "react";

import {
    Container,
    ImageIllustration,
    IntroCard,
    SocialMediaItem,
    SocialMedias,
    Content,
    Text,
} from "./styles";
import AmandaName from "../../assets/images/amanda.svg";
import MeIllustration from "../../assets/images/me.png";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import Github from "../../assets/icons/github.svg";
import Medium from "../../assets/icons/medium.svg";
import Light from "../../assets/icons/light.svg";

export function Intro() {
    return (
        <Container>
            <ImageIllustration
                src={AmandaName}
                width={124}
                height={16}
                alt="amandaDuarte_logo"
            />
            <Content>
                <SocialMedias>
                    <a href="https://www.linkedin.com/in/amanda-duarte-99545721b/">
                        <SocialMediaItem src={LinkedIn} alt="LinkedIn_logo" />
                    </a>
                    <a href="https://github.com/amandaduuaarte">
                        <SocialMediaItem src={Github} alt="Github_logo" />
                    </a>
                    <a href="https://medium.com/@amandaduuaarte">
                        <SocialMediaItem src={Medium} alt="Medium_logo" />
                    </a>
                    <SocialMediaItem src={Light} alt="change_theme_to_light" />
                </SocialMedias>
                <IntroCard>
                    <Text>
                        Hi! I’m Amanda. Mobile and Front-End Developer.{" "}
                    </Text>
                </IntroCard>
                <ImageIllustration src={MeIllustration} alt="illustration_me" />
            </Content>
        </Container>
    );
}
