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
    margin-top: 100px;
  }
`;

export const Pic = styled.img`
  object-fit: cover;
  width: 102px;
  height: 102px;
  border-radius: 50%;
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
`;

export const Age = styled.p`
  text-align: left;
  margin: 0;
  margin-left: 18px;
  margin-top: 16px;
`;

export const BirthDate = styled.div`
  text-align: left;
  margin: 0;
  margin-left: 18px;
  margin-top: 16px;
`;

export const Nationality = styled.div`
  text-align: left;
  margin: 0;
  margin-left: 18px;
  margin-top: 16px;
`;

export const Information = styled.div`
  text-align: left;
  margin: 0;
  margin-left: 18px;
  margin-top: 16px;
  font-size: 22px;

  span {
    text-align: left;
    color: #f4f4f4;
    margin: 0;
  }
`;

export const MakeItColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
