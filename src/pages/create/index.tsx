import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson, MdPhone } from "react-icons/md";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

import { IFormData } from "./types";

import {
  Column,
  Container,
  VoltarLogin,
  TextHighLight,
  Row,
  SubtitleCreate,
  Title,
  TitleCreate,
  Wrapper,
  Span,
} from "./style";

const schema = yup.object({
  name: yup
    .string()
    .required("Campo Obrigatório")
    .min(3, "No mínimo 3 caracteres"),

  email: yup.string().email("Email inválido").required("Campo obrigatório"),

  phone: yup
    .string()
    .min(10, "O telefone deve ter no mínimo 10 dígitos")
    .max(12, "O telefone deve ter no máximo 12 dígitos")
    .required("O telefone é obrigatório"),

  senha: yup
    .string()
    .min(3, "No mínimo 3 caracteres")
    .required("Campo obrigatório"),
});

const Create = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema), mode: "onChange" });

  const cadastrarUsuario = async (formData: IFormData) => {
    try {
      await api.post("users", formData);
      navigate("/feed");
    } catch {
      alert("Erro ao cadastrar usuário. Tente novamente mais tarde.");
    }
  };
  const onSubmit = handleSubmit(cadastrarUsuario);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
            <Row>
              <VoltarLogin>VOLTAR PARA LOGIN</VoltarLogin>
            </Row>
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCreate>Comece agora grátis</TitleCreate>
            <SubtitleCreate>Crie sua conta e make the change._</SubtitleCreate>
            <form onSubmit={onSubmit}>
              <Input
                name="name"
                control={control}
                placeholder="Nome completo"
                type="string"
                leftIcon={<MdPerson />}
              />

              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="Email"
                type="email"
                leftIcon={<MdEmail />}
              />

              <Input
                name="phone"
                errorMessage={errors?.phone?.message}
                control={control}
                placeholder="Celular ex: (xx) xxxxx-xxxx"
                type="tel"
                pattern="[0-9]*"
                inputMode="numeric"
                leftIcon={<MdPhone />}
              />

              <Input
                name="senha"
                errorMessage={errors?.senha?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />

              <Button
                title="CRIAR MINHA CONTA GRATÍS"
                variant="primary"
                type="onSubmit"
              />
            </form>
            <Span>
              <SubtitleCreate>Já tenho conta. </SubtitleCreate>{" "}
              <TextHighLight>Fazer Login.</TextHighLight>
            </Span>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Create };
