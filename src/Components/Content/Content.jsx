import React, { useEffect, useState } from "react";

import * as S from "./styles";

const Content = ({ setPageView, setLuminosity, pageView, luminosity }) => {
  return (
    <>
      <>
        <S.ContentContainer isLighty={luminosity === "light"}>
          <p> teste</p>
        </S.ContentContainer>
      </>
    </>
  );
};

export default Content;
