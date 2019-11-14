import React, { Fragment, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, TitleStyle, MainTitleStyle } from "./style";
import Button from "@material-ui/core/Button";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

const StudentDetails = props => {
  const [studentInfo, setStudent] = useState();
  const [studentNotFound, setStudentNotFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const name = props.location.state.name;
      try {
        const response = await axios.get(`${BACKEND_URL}/student`, {
          params: { fullName: name }
        });
        const fetchedStudentData = await response.data;
        setStudent(fetchedStudentData);
      } catch {
        setStudentNotFound(true);
        setTimeout(() => {
          props.history.push({
            pathname: "/"
          });
        }, 1500);
      }
    }
    fetchData();
  }, [props.history, props.location.state.name]);

  return (
    <Container>
      {studentNotFound && (
        <MainTitleStyle style={{ color: "red" }}>
          Estudante não encontrado. Redirecionando...
        </MainTitleStyle>
      )}
      {!studentNotFound && studentInfo && (
        <Fragment>
          <MainTitleStyle>
            Perfil Estudantil: {studentInfo.fullName}{" "}
          </MainTitleStyle>
          <p>
            <strong>Curso:</strong> {studentInfo.course}
          </p>
          <p>
            <strong>Turma:</strong> {studentInfo.graduationYear}
          </p>
          <p>
            <strong>Avatar:</strong>
          </p>
          <img
            src={studentInfo.avatarSrc}
            style={{ width: 200 }}
            alt="Avatar do(a) estudante"
          />

          {studentInfo.average !== 0 && (
            <TitleStyle>Média atual: {studentInfo.average}</TitleStyle>
          )}
          {studentInfo.average === 0 && (
            <TitleStyle>Este aluno(a) não possui notas registradas.</TitleStyle>
          )}
          <Button variant="contained" component={Link} to="/">
            Voltar para a página inicial
          </Button>
        </Fragment>
      )}
    </Container>
  );
};

export default withRouter(StudentDetails);
