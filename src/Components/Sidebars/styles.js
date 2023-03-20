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


export const SideMenu = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
`;

