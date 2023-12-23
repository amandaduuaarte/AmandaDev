/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

import {
    Checkbox,
    Container,
    ContainerCheckBox,
    ContainerLang,
    ImageIlustration,
    Label,
    Row,
    SeeMoreButton,
    SeeMoreContainer,
    SocialMediaItem,
    SocialMedias,
    Text,
} from "./styles";
import MeIlustration from "../../assets/images/me.png";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import Github from "../../assets/icons/github.svg";
import Medium from "../../assets/icons/medium.svg";
import Light from "../../assets/icons/light.svg";
import { Colors } from "../../utils/constants";

export function Intro() {
    return (
        <Container>
            <ContainerLang>
                <ContainerCheckBox>
                    <Checkbox isChecked>
                        <CheckIcon
                            sx={{ color: Colors.primarys.white, fontSize: 12 }}
                        />
                    </Checkbox>
                    <Label> Pt-Br</Label>
                </ContainerCheckBox>
                <ContainerCheckBox>
                    <Checkbox isChecked={false} />
                    <Label>En-Us</Label>
                </ContainerCheckBox>
            </ContainerLang>
            <Row>
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
                <ImageIlustration src={MeIlustration} alt="ilustration_me" />
            </Row>
            <Text>Hi. I'm Amanda.</Text>
            <Text>Software Developer.</Text>

            <SeeMoreContainer>
                <SeeMoreButton> See More </SeeMoreButton>
            </SeeMoreContainer>
        </Container>
    );
}
