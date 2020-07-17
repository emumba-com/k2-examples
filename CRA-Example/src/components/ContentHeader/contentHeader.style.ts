import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColors.heading};
  margin-bottom: 10px;
`;
export const TitleStyled = styled.div`
  font-weight: bold;
`;
