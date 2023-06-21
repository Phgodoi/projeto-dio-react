import logo from "../../assets/logo-full2.png";
import { Button } from "../Button";

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
              <Button title= "Entrar" />
              <Button title= "Criar conta" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
