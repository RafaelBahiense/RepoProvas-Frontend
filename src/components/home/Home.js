import { Link } from "react-router-dom";
import styled from "styled-components"

import NavBar from "../navbar/navbar";

export default function Home() {
    return (
        <>
            <NavBar/>
            <HomeWrapper>
                <Logo src={"https://infoprovas.dcc.ufrj.br/imagens/logo.png"} alt={"logo"}/>
                <Options>
                    <Link to={"/professores"}>
                        <OptionButton>por professor</OptionButton>
                    </Link>
                    <Link to={"/disciplinas"}>
                        <OptionButton>por disciplina</OptionButton>
                    </Link>
                </Options>
            </HomeWrapper>
        </>
    );
}

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Logo = styled.img`
    margin-top: 80px;
`;

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 500px;
`;

const OptionButton = styled.button`
  height: 30px;
  width: 240px;
  background: url("https://infoprovas.dcc.ufrj.br/imagens/bg_botao.jpg") repeat-x;
  border: none;
  color: white;
  font-family: Raleway;
  font-size: 18px;
`;