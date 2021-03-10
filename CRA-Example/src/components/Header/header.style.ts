import styled from "styled-components";

export const HeaderStyled = styled.header`
  box-shadow: 0 7px 7px 0 rgba(136, 136, 136, 0.09);
  background: #2b4654;
  top: 0;
  left: auto;
  right: 0;
  z-index: 2;
  height: 50px;
  width: 100%;
  position: fixed;
  .header-content-wrapper {
    height: 100%;
  }
  .heading {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d0e3e8;
    > span > a {
      color: #d0e3e8;
      text-decoration: underline;
    }
  }
  .select-container {
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    display: flex;
    .ant-select-selection {
      background: transparent;
      border: none;
      color: #d0e3e8;
      margin-top: 2px;
    }
    .ant-select-arrow {
      color: #d0e3e8;
    }
  }
  .toggle {
    justify-content: center;
    height: 100%;
    align-items: center;
    display: flex;
    color: #d0e3e8;
  }
  .calendar-icon {
    color: #d0e3e8;
  }
`;
