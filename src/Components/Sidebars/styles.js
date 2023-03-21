import styled, { css } from "styled-components";

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #333842;

  ${(props) =>
    props.isLighty &&
    css`
      background: #ffffff;
    `}
`;

export const Icons = styled.div`
  width: 60px;
  margin: 10px;
  cursor: pointer;
  border-left: 2px solid transparent;

  :hover {
    border-left: 2px solid #fff;
  }

  ${(props) =>
    props.isLighty &&
    css`
      :hover {
        border-left: 2px solid #333842;
      }
    `}
`;

export const SecondGroup = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

export const MakeItRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MakeItColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TitleBar = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
  color: #fff;
  font-size: 20px;
  height: 60px;
  width: 260px;
  background: #21252b;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Ubuntu", sans-serif;

  .title-bar-p {
    margin-left: 18px;
  }

  ${(props) =>
    props.isLighty &&
    css`
      background: #f0f0f0f0;
      color: #21252b;
    `}
`;

export const SideOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #21252b;

  ${(props) =>
    props.isLighty &&
    css`
      background: #f0f0f0f0;
      color: #21252b;
    `}
`;

export const AboutMe = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap");
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: #eaeff2;
  cursor: pointer;

  ${(props) =>
    props.isLighty &&
    css`
      color: #21252b;
      font-weight: bold;
    `}
`;

export const Professional = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Asap:wght@300&family=Ubuntu&display=swap");
  font-family: "Asap", sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: #eaeff2;
  cursor: pointer;
`;

export const Githug = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Asap:wght@300&family=Ubuntu&display=swap");
  font-family: "Asap", sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: #eaeff2;
  cursor: pointer;
`;

export const Gaming = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Asap:wght@300&family=Ubuntu&display=swap");
  font-family: "Asap", sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: #eaeff2;
  cursor: pointer;
`;

export const Dados = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Asap:wght@300&family=Ubuntu&display=swap");
  font-family: "Asap", sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: #eaeff2;
  cursor: pointer;

  ${(props) =>
    props.isLighty &&
    css`
      color: #21252b;
      font-weight: bold;
    `}
`;

export const SmollIcons = styled.div`
  margin-right: 5px;
  margin-left: 16px;
`;

export const Choose = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap");
  color: #fff;
  font-size: 16px;
  height: 40px;
  width: 260px;
  background: #333842;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Work Sans", sans-serif;

  .choose-bar-p {
    margin-left: 18px;
  }

  ${(props) =>
    props.isLighty &&
    css`
      background: #fff;
      color: #333842;
    `}
`;
