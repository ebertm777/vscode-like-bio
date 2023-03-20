import React, { useEffect, useState } from "react";

import * as S from "./styles";

import Sidebars from "../Sidebars/Sidebars";
import Content from "../Content/Content";

const Bio = ({
  setPageView,
  setLuminosity,
  pageView,
  luminosity,
  content,
  setContent,
}) => {
  return (
    <>
      <S.BioContainer>
        <Sidebars
          content={content}
          setContent={setContent}
          pageView={pageView}
          luminosity={luminosity}
          setPageView={setPageView}
          setLuminosity={setLuminosity}
        />
        <Content
          content={content}
          setContent={setContent}
          pageView={pageView}
          luminosity={luminosity}
          setPageView={setPageView}
          setLuminosity={setLuminosity}
        />
      </S.BioContainer>
    </>
  );
};

export default Bio;
