import React, { useEffect, useState } from "react";

import * as S from "./styles";

import Sidebars from "../Sidebars/Sidebars";

const Bio = ({ setPageView, setLuminosity, pageView, luminosity }) => {
  return (
    <>
      <S.BioContainer>
        <Sidebars
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
