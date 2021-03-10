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

  .ant-drawer-header {
    background-color: ${({ theme }) => theme.backgroundColors.card};
    border-bottom: 0.6px solid #bcbdc2;
  }
  .ant-drawer-title {
    color: ${({ theme }) => theme.textColors.heading};
    font-size: 14px;
  }
  .ant-drawer-content {
    background-color: ${({ theme }) => theme.backgroundColors.card};
  }

  .ant-select-selection,
  .ant-select-selection__clear,
  .ant-select-arrow,
  .ant-select-dropdown-menu-item-active,
  .ant-select-selection--multiple .ant-select-selection__choice {
    background-color: ${({ theme }) => theme.backgroundColors.card};
    color: ${({ theme }) => theme.textColors.normal};
  }
  .ant-drawer-close,
  .ant-select-selection--multiple .ant-select-selection__choice__remove {
    color: ${({ theme }) => theme.textColors.normal};
    :hover {
      color: ${({ theme }) => theme.textColors.heading};
    }
  }
  .filter-not-applicable {
    color: ${({ theme }) => theme.textColors.normal};
  }
`;
