import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper,} from "./style";
import { IFormData } from "./types";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(3, "No mínimo 3 caracteres")
    .required("Campo obrigatório"),
});

const Login = () => {
  const navigate = useNavigate();

  const {
    control, handleSubmit, formState: { errors }, } = 
    useForm <IFormData>({ resolver: yupResolver(schema),mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert('Email ou senha inválidos.')
      }
    } catch {
      alert("Erro desconhecido, tente novamente mais tarde.");
    }
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
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="Email"
                type="email"
                leftIcon={<MdEmail />}
              />

              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />

              <Button title="Entrar" variant="primary" type="submit" />
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
