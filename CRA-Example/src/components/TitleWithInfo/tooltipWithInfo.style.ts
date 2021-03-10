import styled from "styled-components";

export const TooltipContainer = styled.div`
  font-size: 9px;
  color: ${({ theme }) => theme.textColors.heading || "#fff"};
  padding: 0 4px;
  margin: 0 6px;
  border: 1px solid ${({ theme }) => theme.borderColors.info || "#ddd"};
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
`;
