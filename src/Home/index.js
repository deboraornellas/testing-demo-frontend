import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Container, TitleStyle, MainTitleStyle } from "./style";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import ITALogo from "./ITA_logo.png";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

const Home = props => {
  const [studentPageFormOpen, setStudentPageFormOpen] = useState(false);
  const [newGradeFormOpen, setNewGradeFormOpen] = useState(false);
  const [newStudentFormOpen, setNewStudentFormOpen] = useState(false);
  const [addGradeMessage, setAddGradeMessage] = useState("");
  const [addStudentMessage, setAddStudentMessage] = useState("");

  const openNewStudentForm = () => {
    setNewStudentFormOpen(!newStudentFormOpen);
    setAddStudentMessage("");
  };

  const openStudentPageForm = () => {
    setStudentPageFormOpen(!studentPageFormOpen);
  };

  const openNewGradeForm = () => {
    setNewGradeFormOpen(!newGradeFormOpen);
    setAddGradeMessage("");
  };

  const redirectToStudentPage = event => {
    const name = event.target[0].value;
    event.preventDefault();
    props.history.push({
      pathname: "/student-details",
      state: { name }
    });
  };

  const sendNewStudentData = async event => {
    const fullName = event.target[0].value;
    const course = event.target[1].value;
    const graduationYear = event.target[2].value;

    event.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/new-student`, null, {
        params: {
          fullName,
          course,
          graduationYear
        }
      });
      setAddStudentMessage("Aluno(a) adicionado(a) com sucesso");
    } catch (e) {
      console.log(e);
      setAddStudentMessage("Não foi possível adicionar o(a) aluno(a)");
    }
  };

  const sendNewGrade = async event => {
    const fullName = event.target[0].value;
    const newGrade = event.target[1].value;

    event.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/add-grade`, null, {
        params: {
          fullName,
          newGrade
        }
      });
      setAddGradeMessage("Nota adicionada com sucesso.");
    } catch (e) {
      console.log(e);
      setAddGradeMessage("Não foi possível adicionar a nota.");
    }
  };

  return (
    <Container>
      <img src={ITALogo} style={{ width: "180px" }} alt="Logo do ITA" />
      <MainTitleStyle>
        Seja bem vindo ao serviço de informação de alunos do ITA
      </MainTitleStyle>
      <p>
        <strong>
          Aqui, você pode acessar dados importantes dos alunos: nome, curso e
          média acadêmica.
        </strong>
      </p>
      <p>
        Digite o nome completo do(a) aluno(a) para visualizar suas informações.
      </p>

      <Button variant="contained" onClick={openStudentPageForm}>
        Acessar perfil de um(a) aluno(a)
      </Button>
      <br />
      {studentPageFormOpen && (
        <Fragment>
          <TitleStyle>Acessar perfil de um(a) aluno(a):</TitleStyle>
          <form onSubmit={redirectToStudentPage}>
            <Input type="text" placeholder="Nome do(a) aluno(a)" />
            <br /> <br />
            <Button variant="contained" type="submit">
              Ver perfil
            </Button>
          </form>
          <br />
        </Fragment>
      )}
      <Button variant="contained" onClick={openNewGradeForm}>
        Enviar nova nota
      </Button>
      {newGradeFormOpen && (
        <Fragment>
          <br />
          <form onSubmit={sendNewGrade}>
            <Input type="text" placeholder="Nome do(a) aluno(a)" />
            <br />
            <Input type="text" placeholder="Nova nota (valor numérico)" />
            <br />
            <br />
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </form>
          <p>
            <strong>{addGradeMessage}</strong>
          </p>
        </Fragment>
      )}
      <br />
      <Button variant="contained" onClick={openNewStudentForm}>
        Adicionar novo(a) aluno(a) à plataforma
      </Button>
      <br />
      {newStudentFormOpen && (
        <Fragment>
          <form onSubmit={sendNewStudentData}>
            <Input type="text" placeholder="Nome do(a) aluno(a)" />
            <br />
            <Input type="text" placeholder="Curso do(a) aluno(a)" />
            <br />
            <Input type="text" placeholder="Ano de graduação" />
            <br />
            <br />
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </form>
          <p>
            <strong>{addStudentMessage}</strong>
          </p>
        </Fragment>
      )}
    </Container>
  );
};

export default withRouter(Home);
