import React, { useEffect, useState } from "react";

import * as S from "./styles";

import Bio from "../Bio/Bio";

const Main = ({ setPageView, setLuminosity, pageView, luminosity }) => {
  return (
    <>
      <>
        <>
          <S.Container>
            <Bio
              pageView={pageView}
              luminosity={luminosity}
              setPageView={setPageView}
              setLuminosity={setLuminosity}
            />
          </S.Container>
        </>
      </>
    </>
  );
};

export default Main;
