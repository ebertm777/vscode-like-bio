import React, { useEffect, useState } from "react";

import * as S from "./styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GamesIcon from "@mui/icons-material/Games";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

import FolderIcon from "@mui/icons-material/Folder";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Sidebars = ({ setPageView, setLuminosity, pageView, luminosity }) => {
  const darkIcons = {
    color: "#333842",
    fontSize: "60px",
  };
  const lightIcons = {
    color: "#fff",
    fontSize: "60px",
  };

  const smollIconsStyleDark = {
    color: "#FEDE00",
    fontSize: "18px",
  };

  const smollIconsStyleLight = {
    color: "#0066CC",
    fontSize: "18px",
  };

  return (
    <S.MakeItRow>
      {pageView === "initial" && (
        <>
          <S.SideContainer isLighty={luminosity === "light"}>
            <S.Icons isLighty={luminosity === "light"}>
              <ContactPageIcon
                style={luminosity === "light" ? darkIcons : lightIcons}
              />
            </S.Icons>
            <S.Icons isLighty={luminosity === "light"}>
              <EngineeringIcon
                style={luminosity === "light" ? darkIcons : lightIcons}
              />
            </S.Icons>
            <S.Icons isLighty={luminosity === "light"}>
              <GitHubIcon
                style={luminosity === "light" ? darkIcons : lightIcons}
              />
            </S.Icons>
            <S.Icons isLighty={luminosity === "light"}>
              <GamesIcon
                style={luminosity === "light" ? darkIcons : lightIcons}
              />
            </S.Icons>

            <S.SecondGroup>
              {luminosity === "dark" && (
                <S.Icons
                  isLighty={luminosity === "light"}
                  onClick={() => {
                    setLuminosity("light");
                  }}
                >
                  <ToggleOffIcon
                    style={luminosity === "light" ? darkIcons : lightIcons}
                  />
                </S.Icons>
              )}

              {luminosity === "light" && (
                <S.Icons
                  isLighty={luminosity === "light"}
                  onClick={() => {
                    setLuminosity("dark");
                  }}
                >
                  <ToggleOnIcon
                    style={luminosity === "light" ? darkIcons : lightIcons}
                  />
                </S.Icons>
              )}

              <S.Icons isLighty={luminosity === "light"}>
                <AccountCircleIcon
                  style={luminosity === "light" ? darkIcons : lightIcons}
                />
              </S.Icons>
            </S.SecondGroup>
          </S.SideContainer>

          <S.SideMenu>
            <S.MakeItColumn>
              <S.TitleBar isLighty={luminosity === "light"}>
                <p className="title-bar-p">Explorer</p>
              </S.TitleBar>
              <S.Choose isLighty={luminosity === "light"}>
                <p className="choose-bar-p">Escolha uma opção</p>
              </S.Choose>
              <S.SideOptions isLighty={luminosity === "light"}>
                <S.AboutMe isLighty={luminosity === "light"}>
                  <S.SmollIcons>
                    <FolderIcon
                      style={
                        luminosity === "light"
                          ? smollIconsStyleLight
                          : smollIconsStyleDark
                      }
                    />
                  </S.SmollIcons>
                  Sobre Mim
                </S.AboutMe>
                <S.Dados isLighty={luminosity === "light"}>
                  <S.SmollIcons>
                    <ContactMailIcon
                      style={
                        luminosity === "light"
                          ? smollIconsStyleLight
                          : smollIconsStyleDark
                      }
                    />
                  </S.SmollIcons>
                  Contato
                </S.Dados>
                <S.Professional></S.Professional>
              </S.SideOptions>
            </S.MakeItColumn>
          </S.SideMenu>
        </>
      )}
    </S.MakeItRow>
  );
};

export default Sidebars;
