import React from "react";
import { Icon, Menu, Dropdown } from "antd";

import { HeaderStyled } from "./header.style";
const menu = (
  <Menu>
    <Menu.Item key="0">Logout</Menu.Item>
  </Menu>
);
export default function Header() {
  return (
    <HeaderStyled>
      <div className="header-content-wrapper">
        <div className="header-branding">
          <div className="logo-container">
            <a
              target="_blank"
              href="http://k2.emumba.com"
              rel="noopener noreferrer"
            >
              <img className="img" src="/icon.svg" alt="K2" />
            </a>
            <span className="logo">K2 Dashboard</span>
          </div>
        </div>
        <div style={{ color: "white" }} className="header-actions">
          <div className="icons-wrapper">
            <Icon
              className="action-icon"
              type="github"
              theme="filled"
              onClick={() =>
                window.open(
                  "https://github.com/emumba-com/k2-examples/tree/master/CRA-Example",
                  "_blank",
                )
              }
            />
            <Icon className="action-icon" type="search" />
            <Icon className="action-icon" type="bell" theme="filled" />
            <Icon className="action-icon" type="setting" theme="filled" />
          </div>
          <div className="action-menu-wrapper">
            <div className="header-avatar">E</div>
            <div className="header-menu">
              <Dropdown overlay={menu} trigger={["click"]}>
                <div className="header-menu">
                  Emumba <Icon type="caret-down" />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        {/* <ToggleButton /> */}
      </div>
    </HeaderStyled>
  );
}
