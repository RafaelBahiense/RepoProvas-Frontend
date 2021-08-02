import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Link to={"/"}>
        <NavBarButton>Home</NavBarButton>
      </Link>
      <Link to={"/enviar-prova"}>
        <NavBarButton>Enviar prova</NavBarButton>
      </Link>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  background: url("https://infoprovas.dcc.ufrj.br/imagens/bg_menu.png") repeat-x;
`;

const NavBarButton = styled.button`
  height: 30px;
  width: 240px;
  background: none;
  border: none;
  color: white;
  font-family: Raleway;
  font-size: 18px;
`;
