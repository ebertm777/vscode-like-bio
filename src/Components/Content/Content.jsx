import React, { useEffect, useState } from "react";

import * as S from "./styles";

import INU from "../../Assets/IMG/inu.png";

const Content = ({
  setPageView,
  setLuminosity,
  pageView,
  luminosity,
  content,
  setContent,
}) => {
  return (
    <S.ContentContainer isLighty={luminosity === "light"}>
      {content === "aboutMe" && (
        <S.MakeItColumn>
          <div className="divish">
            <S.Pic src={INU} isLighty={luminosity === "light"}/>
            <S.Info>
              <S.Name isLighty={luminosity === "light"}>
                <span>Nome:</span> Eber Torres Macedo
              </S.Name>
              <S.Age isLighty={luminosity === "light"}>
                <span>Idade:</span> 35
              </S.Age>
              <S.BirthDate isLighty={luminosity === "light"}>
                <span>Data de nascimento:</span> 02-04-1987
              </S.BirthDate>
              <S.Nationality isLighty={luminosity === "light"}>
                <span>Nacionalidade:</span> Brasileira
              </S.Nationality>
            </S.Info>
          </div>

          <div className="divish-2">
            <S.Information isLighty={luminosity === "light"}>
              <span>Mais sobre mim:</span>
              <p>
                Desenvolvedor Front-end com dois anos de experiência
                profissional desenvolvendo aplicações Front-end com tecnologia
                JavaScript e React, focando nas experiências de usuário.
              </p>
            </S.Information>
          </div>
        </S.MakeItColumn>
      )}

      {content === "contact" && (
        <>
          <p> outro</p>
          <p> teste</p>
          <p> outro</p>
        </>
      )}
    </S.ContentContainer>
  );
};

export default Content;
