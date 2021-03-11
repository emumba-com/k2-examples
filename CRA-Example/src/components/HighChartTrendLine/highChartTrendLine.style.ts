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
  }
  .card-body {
    padding-top: 0;
  }
  .ant-btn-icon-only {
    background: transparent;
    color: gray;
    border: 0;
    color: ${(props)=>props.theme.textColors.info};
  }
  .ant-btn-icon-only:hover {
    background: transparent;
  }
`;
