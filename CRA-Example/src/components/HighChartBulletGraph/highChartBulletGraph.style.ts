import styled from "styled-components";

import { Card } from "@k2/ui";

export const CardStyled = styled(Card)`
  .card-title {
    > div {
      font-weight: bold;
      text-transform: capitalize !important;
      font-family: "OpenSans-Regular" !important;
    }
  }
  .card-actions {
    display: flex;
    justify-content: center;
    align-items: center;

    .explanation-icon {
      font-size: 10px;
      border: 1px solid ${({ theme }) => theme.borderColors.info || "#ddd"};
      color: ${({ theme }) => theme.textColors.heading || "#fff"};
      padding: 2px;
      border-radius: 50%;
    }
  }
  .card-body {
    padding-top: 0;
  }
`;
