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
`;
