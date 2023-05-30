import React from "react";
import { FiThumbsUp } from 'react-icons/fi'

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/97840190?v=4"/>
          <div>
            <h4>Paulo Godoi</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de REACT</h4>
          <p>
            Projeto feito para o curso de REACT no bootcamp da dio Orange Tech+{" "}
            <strong>Saiba mais...</strong>
          </p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #JAVASCRIPT #REACT</h4>
            <p> <FiThumbsUp /> 5 </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
