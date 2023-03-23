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
            <S.Pic src={INU} />
            <S.Info>
              <S.Name>
                <span>Nome:</span> Eber Torres Macedo
              </S.Name>
              <S.Age>
                <span>Idade:</span> 35
              </S.Age>
              <S.BirthDate>
                <span>Data de nascimento:</span> 02-04-1987
              </S.BirthDate>
              <S.Nationality>
                <span>Nacionalidade:</span> Brasileira
              </S.Nationality>
            </S.Info>
          </div>

          <div className="divish-2">
            <S.Information>
              <span>Mais sobre mim:</span>
              <p>
                Desenvolvedor de Front-end com dois anos de experiência
                profissional. Experiencia em desenvolver aplicações Front-end
                com tecnologia JavaScript e React, focando nas experiências de
                usuário.
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
