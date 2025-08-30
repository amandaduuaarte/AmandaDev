/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";

import {
    Container,
    ImageIllustration,
    IntroCard,
    SocialMediaItem,
    SocialMedias,
    Content,
    Text,
    LocationContainer,
    Header,
    PhaseContainer,
    AboutMe,
} from "./styles";
import AmandaName from "../../assets/images/amanda.svg";
import Map from "../../assets/icons/map.svg";
import MeIllustration from "../../assets/images/me.png";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import Github from "../../assets/icons/github.svg";
import Medium from "../../assets/icons/medium.svg";
import Light from "../../assets/icons/light.svg";
import { ThemeContext } from "../../utils/theme/theme";

export function Intro() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <Header>
                <ImageIllustration
                    src={AmandaName}
                    width={124}
                    height={16}
                    alt="amandaDuarte_logo"
                />
            </Header>
            <Container>
                <Content>
                    <SocialMedias>
                        <a href="https://www.linkedin.com/in/amanda-duarte-99545721b/">
                            <SocialMediaItem
                                src={LinkedIn}
                                alt="LinkedIn_logo"
                            />
                        </a>
                        <a href="https://github.com/amandaduuaarte">
                            <SocialMediaItem src={Github} alt="Github_logo" />
                        </a>
                        <SocialMediaItem
                            src={Light}
                            onClick={toggleTheme}
                            alt="change_theme_to_light"
                        />
                    </SocialMedias>
                    <IntroCard>
                        <AboutMe>
                            <Text size={1.3}>
                                Hey! I’m Amanda Duarte.👋
                                <br />
                                <br />
                                Mobile Developer currently working with React
                                Native, TypeScript, and other mobile
                                technologies, with a strong interest in Kotlin
                                application development.{" "}
                            </Text>
                        </AboutMe>
                        <LocationContainer>
                            <SocialMediaItem src={Map} alt="map_icon" />
                            <Text size={1.2}>Living in Brazil</Text>
                        </LocationContainer>
                    </IntroCard>
                    <ImageIllustration
                        src={MeIllustration}
                        alt="illustration_me"
                    />
                </Content>
                <PhaseContainer>
                    <p>
                        "You never really understand a person until you consider
                        things from his point of view” “Sir?” “—until you climb
                        into his skin and walk around in it."
                        <br />
                        <br />
                        <p> - To Kill A Mockingbird</p>
                    </p>
                </PhaseContainer>
            </Container>
        </>
    );
}
