import styled from "styled-components";

export const TooltipContainer = styled.div`
  cursor: pointer;
  display: inline-flex;

  .explanation-icon {
    font-size: 10px;
    border: 1px solid ${({ theme }) => theme.borderColors.info || "#ddd"};
    color: ${({ theme }) => theme.textColors.heading || "#fff"};
    padding: 2px;
    border-radius: 50%;
    margin: 0 6px;
  }
`;
