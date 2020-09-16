import styled from "styled-components";
import { Modal } from "antd";

export const ModalWrapper = styled(Modal)`
  .ant-modal-content,
  .ant-modal-header {
    background: ${({ theme }) => {
      return theme.backgroundColors.card;
    }};
    border-bottom: none;
    .ant-modal-title,
    .ant-modal-close-x {
      color: ${({ theme }) => {
        return theme.textColors.heading;
      }};
    }
  }
  .tooltip.type-dark.show {
    > div > div {
      background: none !important;
    }
  }
  .modal-chart-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 60vw;
    width: 60vw;
    min-width: 60vw;
    > div {
      width: 100%;
    }
  }
`;

export const ChartWrapper = styled.div`
  .k2--d3-chart-inner-wrapper {
    circle {
      cursor: pointer;
    }
  }
`;
