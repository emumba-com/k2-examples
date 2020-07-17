import styled from "styled-components";

export const HeaderStyled = styled.header`
  box-shadow: 0 7px 7px 0 rgba(136, 136, 136, 0.09);
  background: #2b4654;
  top: 0;
  left: auto;
  right: 0;
  z-index: 2;
  height: 62px;
  width: 100%;
  position: fixed;
  .header-content-wrapper {
    padding: 12.5px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    max-width: 1600px;
  }

  .header-branding {
    display: flex;
    span {
      padding: 0 20px;
    }

    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        width: 50px;
      }
    }
    .logo {
      margin-left: 15px;
      border-left: #979797 1px solid;
      color: #ffffff;
      font-size: 16px;
      font-weight: 900;
    }

    .page-name {
      color: rgba(175, 175, 175, 0.69);
      font-size: 21px;
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    .action-icon {
      font-size: 22px;
      color: #acbcbc;
      margin-right: 24px;
      cursor: pointer;
    }
    .action-menu-wrapper {
      display: flex;
      align-items: center;
      margin-left: 12px;
      .header-avatar {
        background-color: #6b8bb2;
        padding: 6px 11px;
        border-radius: 50%;
        font-weight: bold;
      }
      .header-menu {
        color: #ffffff;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }

  .search {
    color: #afafaf;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
    align-items: center;
  }

  .ant-input {
    background-color: ${({ theme }) => theme.backgroundColors.card};
    border: 1px solid ${({ theme }) => theme.borderColors.card};
  }
`;
