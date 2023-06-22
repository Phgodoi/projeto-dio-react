import logo from "../../assets/logo-full2.png";
import { Button } from "../Button";

import { useNavigate } from "react-router-dom";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./style";
import { IHeader } from "./types";


const Header = ({ autentication }: IHeader) => {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate("/create");
  };
  const handleClickSingIn = () => {
    navigate("/login");
  };
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {autentication ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>

        <Row>
          {autentication ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/97840190?v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title= "Entrar" variant="default" onClick={handleClickSingIn}/>
              <Button title= "Criar conta" variant="other" onClick={handleClickCreate}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
