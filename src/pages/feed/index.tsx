import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Column, Container, Title, TitleHighLight } from "./style";

const Feed = () => {
  return (
    <>
      <Header  autentication={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <TitleHighLight># RANKING TOP DA SEMANA</TitleHighLight>
          <UserInfo percentual={5} nome="Paulo Godoi" image="https://avatars.githubusercontent.com/u/97840190?v=4"/>
          <UserInfo percentual={15} nome="Paulo Godoi" image="https://avatars.githubusercontent.com/u/97840190?v=4"/>
          <UserInfo percentual={48} nome="Paulo Godoi" image="https://avatars.githubusercontent.com/u/97840190?v=4"/>
          <UserInfo percentual={89} nome="Paulo Godoi" image="https://avatars.githubusercontent.com/u/97840190?v=4"/>
          <UserInfo percentual={65} nome="Paulo Godoi" image="https://avatars.githubusercontent.com/u/97840190?v=4"/>
          <UserInfo percentual={51} nome="Paulo Godoi" image="https://avatars.githubusercontent.com/u/97840190?v=4"/>
          <UserInfo percentual={70} nome="Paulo Godoi" image="https://avatars.githubusercontent.com/u/97840190?v=4"/>
        </Column>
      </Container>
    </>
  );
};

export { Feed };
