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
          {content === "aboutMe" && (
            <>
              <p> teste</p>
              <p> teste</p>
              <p> teste</p>
            </>
          )}

          {content === 'contact' && (
            <>
              <p> outro</p>
              <p> teste</p>
              <p> outro</p>
            </>
          )}
        </S.ContentContainer>
      </>
    </>
  );
};

export default Content;
