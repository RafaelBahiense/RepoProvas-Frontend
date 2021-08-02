import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import NavBar from "../navbar/navbar";
import { API } from "../../config/api";

export default function Professors() {
  const history = useHistory();
  const [tests, setProfessorTests] = useState([]);
  const { id } = useParams();
  console.log(API);
  useEffect(async () => {
    getProfessorTests();
  }, []);

  async function getProfessorTests() {
    try {
      const tests = (await axios.get(`${API}api/tests/professor/${id}`)).data;
      setProfessorTests(tests);
    } catch (e) {
      alert("Error ao buscar dados do servidor");
      history.push("/");
    }
  }
  console.log(tests);

  return (
    <>
      <NavBar />
      <ProfessorWrapper>
        <Logo
          src={"https://infoprovas.dcc.ufrj.br/imagens/logo.png"}
          alt={"logo"}
        />
        {tests.map((category) => (
          <Category key={category.id}>
            <span>{category.name}</span>
            <ul>
              {category.tests.map((test) => (
                <Link to={test.link} key={test.id}>
                  <Test>
                    <span>{test.name}</span>
                    <span>{test.subject.name}</span>
                  </Test>
                </Link>
              ))}
            </ul>
          </Category>
        ))}
      </ProfessorWrapper>
    </>
  );
}

const ProfessorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Logo = styled.img`
  margin-top: 80px;
  margin-bottom: 50px;
`;

const Category = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 620px;

  & > span:first-child {
    margin-bottom: 20px;
  }
`;

const Test = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-right: 30px;
  color: black;
  font-family: Raleway;
  font-size: 15px;

  & > span:last-child {
    margin-left: 70px;
    color: orange;
  }
`;
