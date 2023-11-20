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
    Text,
} from "./styles";
import MeIlustration from "../../assets/images/me.png";
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
            <ImageIlustration src={MeIlustration} alt="ilustration_me" />

            <Text>Hi. I'm Amanda.</Text>
            <Text>Software Developer.</Text>
        </Container>
    );
}
