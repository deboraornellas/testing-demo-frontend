import React from "react";
import { Link } from "react-router-dom";
import { Container, TitleStyle, MainTitleStyle } from "./style";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import ITALogo from "./ITA_logo.png";

const Home = props => {
    return (
        <Container>
            <img src={ITALogo} style={{ width: "180px" }} />
            <MainTitleStyle>
                Seja bem vindo ao serviço de informação de alunos do ITA
            </MainTitleStyle>
            <p>
                <strong>
                    Aqui, você pode acessar dados importantes dos alunos: nome,
                    curso e média acadêmica
                </strong>
            </p>
            <p>
                Digite o nome completo do aluno para visualizar suas
                informações.
            </p>

            <TitleStyle>Acessar perfil de um aluno:</TitleStyle>
            <Input></Input>
            <br />
            <Button variant="contained" component={Link} to="/student-details">
                Ver perfil
            </Button>
            <br />
        </Container>
    );
};

export default Home;
