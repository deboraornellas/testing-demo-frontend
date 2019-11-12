import React from "react";
import { Link } from "react-router-dom";
import { Container, TitleStyle, MainTitleStyle } from "./style";
import Button from "@material-ui/core/Button";

const StudentDetails = props => {
    return (
        <Container>
            <MainTitleStyle>Perfil Estudantil: {props.name} </MainTitleStyle>
            <p>
                <strong>Curso: {props.course}</strong>
            </p>
            <p>
                Here you can add all the words you know from a new language and
                test your memory.
            </p>

            <TitleStyle>Média atual: {props.average}</TitleStyle>
            <Button variant="contained" component={Link} to="/">
                Voltar para a página inicial
            </Button>
        </Container>
    );
};

export default StudentDetails;
