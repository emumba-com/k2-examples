import React from "react";
import { ThemeContext } from "styled-components";

import { SectionStyled } from "./summary.style";
import { Menu, Dropdown, Icon } from "antd";
import { ToggleButton } from "../ThemeToggleButton/ThemeToggleButton";
import { getFormattedDate } from "../../utils";

export interface SummaryProps {}
const menu = (
  <Menu>
    <Menu.Item key="30">Last 30 Days</Menu.Item>
    <Menu.Item key="60">Last 60 Days</Menu.Item>
  </Menu>
);
const Summary: React.SFC<SummaryProps> = () => {
  const {
    mode,
    textColors: { heading: headingColor },
  } = React.useContext(ThemeContext);
  return (
    <SectionStyled iconsColor={mode === "dark" ? headingColor : "#0086e0"}>
      <div className="section-content-wrapper">
        <span className="summary-text">Summary</span>
        <div className="summary-actions">
          <span className="summary-section">
            Last Updated {getFormattedDate(new Date())}
          </span>
          <div className="summary-section action-menu-wrapper">
            <Icon
              className="summary-menu-icon"
              type="calendar"
              theme="filled"
            />
            <Dropdown overlay={menu} trigger={["click"]}>
              <div className="summary-menu">
                Last 30 Days <Icon type="caret-down" />
              </div>
            </Dropdown>
          </div>
          <div className="summary-section">
            <ToggleButton />
          </div>
        </div>
      </div>
    </SectionStyled>
  );
};

export default Summary;
