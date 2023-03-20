import React, { useEffect, useState } from "react";

import * as S from "./styles";

const Content = ({
  setPageView,
  setLuminosity,
  pageView,
  luminosity,
  content,
  setContent,
}) => {
  return (
    <>
      <>
        <S.ContentContainer isLighty={luminosity === "light"}>
          {content === "aboutMe" && <p> teste</p>}
        </S.ContentContainer>
      </>
    </>
  );
};

export default Content;
