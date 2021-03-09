import styled from "styled-components";

export const ColorTileStyled = styled.header<{
  borderColor: string;
  backgroundColor: string;
}>`
  border-left: 3px solid ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
  padding: 15px 35px 15px 10px;
  .title-wrapper {
    color: rgb(119, 119, 119);
    font-size: 12px;
  }
  .count-wrapper {
    font-size: 33px;
    font-weight: bolder;
    color: ${({ theme }) => theme.textColors.heading};
  }
`;
