import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./style";

const schema = yup.object({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate();

  const {control , handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log(isValid, errors);

  const onSubmit = (data) => console.log(data);

  const handleClickSingIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Já tem cadastro?</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors.email.message}
                control={control}
                placeholder="Email"
                type="email"
                leftIcon={<MdEmail />}
              />

              <Input
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />

              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            <Row>
              <EsqueciText>Esqueci minha senha.</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
