import styled from "styled-components";

export const CenterLabelStyled = styled.label`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) =>
    theme.mode === "light" ? "black" : theme.textColors.heading};
  .center-label-subtitle {
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme }) => theme.textColors.heading};
  }
`;
