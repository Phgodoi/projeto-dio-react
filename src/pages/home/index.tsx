import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import Bannerimage from "../../assets/banner.png";
import { Header } from "../../components/Header";

import { Container, Title, TitleContent, TitleHighLight } from "./style";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSingIn = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TitleContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TitleContent>
          <Button
            title="Começar agora"
            variant="primary"
            onClick={handleClickSingIn}
          />
        </div>
        <div>
          <img src={Bannerimage} alt="Imagem pricipal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
