import styled from "styled-components";
import { CustomThemeProps } from "@k2/utils";
export const SectionStyled = styled.section<{
  iconsColor: string;
  theme?: CustomThemeProps;
}>`
  background-color: ${props => props.theme.backgroundColors.secondary};
  color: ${props => props.theme.textColors.info};
  box-shadow: 0 7px 7px 0 rgba(136, 136, 136, 0.09);
  top: 62px;
  left: auto;
  right: 0;
  z-index: 2;
  height: 50px;
  width: 100%;
  position: fixed;

  .section-content-wrapper {
    padding: 12.5px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1600px;
    align-items: center;
    padding: 12.5px;
  }

  .summary-text {
    color: ${props => props.iconsColor};
    font-weight: bold;
    font-size: 14px;
  }
  .summary-actions {
    display: flex;

    .summary-section:not(:last-child) {
      margin-right: 55px;
    }
    .action-menu-wrapper {
      display: flex;
      align-items: center;
      .summary-menu {
        cursor: pointer;
      }
      .summary-menu-icon {
        font-size: 17px;
        color: ${props => props.iconsColor};
        margin-right: 5px;
      }
    }
  }
`;
