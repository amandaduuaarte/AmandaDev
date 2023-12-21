import React from "react";
import {
    ArrowContainer,
    Card,
    CardContent,
    Container,
    Content,
    ExperienceContainer,
    HistoryContainer,
    Image,
    JobDescription,
    JobTech,
    Text,
    WorksContainer,
} from "./styles";
import { Colors } from "../../utils/constants";
import Arrow from "../../assets/icons/arrowNext.svg";
import ArrowLeft from "../../assets/icons/arrowLeft.svg";

export function MyJorney() {
    return (
        <Container>
            <Content>
                <Text bold size={32} color={Colors.texts.white}>
                    Como tudo começou
                </Text>
            </Content>
            <WorksContainer>
                <ArrowContainer direction="column">
                    <HistoryContainer align="center">
                        <Text size={16} bold>
                            Minha trajetória com o desenvolvimento de Software
                            começou por volta de 2017/2018 quando comecei a
                            estudar programação para iniciar meu estágio
                        </Text>
                    </HistoryContainer>
                    <Image src={Arrow} alt="arrow_icon" />
                </ArrowContainer>

                <ArrowContainer>
                    <Image src={ArrowLeft} alt="arrow_icon" size={6} />
                    <HistoryContainer align="flex-end">
                        <Text size={22} bold color={Colors.texts.primary}>
                            Nessa epoca pude aprender mais sobre as bases da
                            programação e ferramentas que programadores mais
                            experientes usavam
                        </Text>
                    </HistoryContainer>
                </ArrowContainer>
            </WorksContainer>
            <Content>
                <Text bold size={32} color={Colors.texts.white}>
                    Minha experiencia
                </Text>
            </Content>
            <ExperienceContainer>
                <Card>
                    <Text color={Colors.texts.greenLight} size={32}>
                        Front-End Developer
                    </Text>
                    <Text color={Colors.texts.greenLight} size={20}>
                        2018 - 2019
                    </Text>
                    <Text color={Colors.texts.greenLight} size={14}>
                        Tijuca Alimentos
                    </Text>
                    <JobDescription>
                        <Text color={Colors.texts.white} size={16}>
                            While I was finishing my studies, Mediastream gave
                            me the opportunity to work in a great team, with
                            projects for big brands.
                        </Text>
                    </JobDescription>
                    <JobTech>
                        <CardContent>
                            <p>React JS </p>
                            <p>React JS </p>
                            <p> React JS </p>
                            <p>React JS </p>
                        </CardContent>
                    </JobTech>
                </Card>

                <Card>
                    <Text color={Colors.texts.greenLight} size={32}>
                        Front-End Developer
                    </Text>
                    <Text color={Colors.texts.greenLight} size={20}>
                        2018 - 2019
                    </Text>
                    <Text color={Colors.texts.greenLight} size={14}>
                        Tijuca Alimentos
                    </Text>
                    <JobDescription>
                        <Text color={Colors.texts.white} size={16}>
                            While I was finishing my studies, Mediastream gave
                            me the opportunity to work in a great team, with
                            projects for big brands.
                        </Text>
                    </JobDescription>
                    <JobTech>
                        <CardContent>
                            <p>React JS </p>
                            <p>React JS </p>
                            <p> React JS </p>
                            <p>React JS </p>
                        </CardContent>
                    </JobTech>
                </Card>

                <Card>
                    <Text color={Colors.texts.greenLight} size={32}>
                        Front-End Developer
                    </Text>
                    <Text color={Colors.texts.greenLight} size={20}>
                        2018 - 2019
                    </Text>
                    <Text color={Colors.texts.greenLight} size={14}>
                        Tijuca Alimentos
                    </Text>
                    <JobDescription>
                        <Text color={Colors.texts.white} size={16}>
                            While I was finishing my studies, Mediastream gave
                            me the opportunity to work in a great team, with
                            projects for big brands.
                        </Text>
                    </JobDescription>

                    <JobTech>
                        <CardContent>
                            <Text>React Native</Text>
                            <Text>HTML</Text>
                            <Text>JavaScript</Text>
                            <Text>CSS</Text>
                            <Text>GIT</Text>
                        </CardContent>
                    </JobTech>
                </Card>

                <Card>
                    <Text color={Colors.texts.greenLight} size={32}>
                        Front-End Developer
                    </Text>
                    <Text color={Colors.texts.greenLight} size={20}>
                        2018 - 2019
                    </Text>
                    <Text color={Colors.texts.greenLight} size={14}>
                        Tijuca Alimentos
                    </Text>
                    <JobDescription>
                        <Text color={Colors.texts.white} size={16}>
                            While I was finishing my studies, Mediastream gave
                            me the opportunity to work in a great team, with
                            projects for big brands.
                        </Text>
                    </JobDescription>
                    <JobTech>
                        <CardContent>
                            <p>React JS </p>
                            <p>React JS </p>
                            <p> React JS </p>
                            <p>React JS </p>
                        </CardContent>
                    </JobTech>
                </Card>
            </ExperienceContainer>
        </Container>
    );
}
