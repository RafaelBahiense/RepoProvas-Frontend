import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import NavBar from "../navbar/navbar";
import { API } from "../../config/api";

export default function Professors() {
  const history = useHistory();
  const [professors, setProfessors] = useState([]);

  useEffect(async () => {
    getProfessors();
  }, []);

  async function getProfessors() {
    try {
      const professors = (await axios.get(API + "api/professors")).data;
      setProfessors(professors);
    } catch (e) {
      alert("Error ao buscar dados do servidor");
      history.push("/");
    }
  }

  return (
    <>
      <NavBar />
      <ProfessorsWrapper>
        <Logo
          src={"https://infoprovas.dcc.ufrj.br/imagens/logo.png"}
          alt={"logo"}
        />
        <ProfessorsList>
          {professors.map((professor) => (
            <Link
              key={professor.id}
              to={`/professor/${professor.id}`}
            >
              <Professor>
                <span>{professor.name}</span>
                <span>{`${professor.testsCount} provas`}</span>
              </Professor>
            </Link>
          ))}
        </ProfessorsList>
      </ProfessorsWrapper>
    </>
  );
}

const ProfessorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Logo = styled.img`
  margin-top: 80px;
`;

const ProfessorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 620px;
`;

const Professor = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 280px;
  margin-right: 30px;
  color: black;
  font-family: Raleway;
  font-size: 18px;

  & > span:last-child {
    color: orange;
  }
`;
