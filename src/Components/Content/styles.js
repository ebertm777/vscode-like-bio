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
`;

export const Pic = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 102px;
  height: 102px;
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
