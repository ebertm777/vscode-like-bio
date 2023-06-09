import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  padding: 25px;
  width: 100%;
  background: #333842;

  ${(props) =>
    props.isLighty &&
    css`
      background: #fff;
    `}

  .divish {
    display: flex;
    align-items: center;
    height: fit-content;
  }

  .divish-2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: fit-content;
    margin-top: 70px;
  }
`;

export const Pic = styled.img`
  object-fit: cover;
  width: 102px;
  height: 102px;
  border-radius: 50%;
  border: 3px solid #f5f5f5;

  ${(props) =>
    props.isLighty &&
    css`
      border: 3px solid #21252b;
    `}
`;

export const Info = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");
  font-family: "Raleway", sans-serif;
  color: antiquewhite;

  span {
    color: #c157eb;
  }
`;

export const Name = styled.p`
  text-align: left;
  margin: 0;
  margin-left: 18px;
  color: #f5f5f5;

  ${(props) =>
    props.isLighty &&
    css`
      color: #21252b;
    `}
`;

export const Age = styled.p`
  text-align: left;
  margin: 0;
  margin-left: 18px;
  margin-top: 16px;
  color: #f5f5f5;

  ${(props) =>
    props.isLighty &&
    css`
      color: #21252b;
    `}
`;

export const BirthDate = styled.div`
  text-align: left;
  margin: 0;
  margin-left: 18px;
  margin-top: 16px;
  color: #f5f5f5;

  ${(props) =>
    props.isLighty &&
    css`
      color: #21252b;
    `}
`;

export const Nationality = styled.div`
  text-align: left;
  margin: 0;
  margin-left: 18px;
  margin-top: 16px;
  color: #f5f5f5;

  ${(props) =>
    props.isLighty &&
    css`
      color: #21252b;
    `}
`;

export const Information = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap");
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0;
  margin-top: 16px;
  font-size: 22px;

  span {
    text-align: left;
    color: #f5f5f5;
    margin: 0;
    color: #c157eb;
  }

  p {
    font-family: "Roboto Mono", monospace;
    margin: 0px;
    margin-top: 5px;
    color: #f5f5f5;
    font-size: 20px;
    padding-right: 100px;
  }

  ${(props) =>
    props.isLighty &&
    css`
      p {
        color: #21252b;
      }
    `}
`;

export const MakeItColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
