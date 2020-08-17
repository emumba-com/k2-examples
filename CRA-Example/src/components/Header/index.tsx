import React from "react";
import { Icon } from "antd";

import { HeaderStyled } from "./header.style";
import { ToggleButton } from "../ThemeToggleButton/ThemeToggleButton";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="header-content-wrapper">
        <div className="heading">
          <span>
            This Dashboard is created using K2. View the source code on{" "}
            <Icon className="action-icon" type="github" theme="filled" />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/emumba-com/k2-examples/tree/master/CRA-Example"
            >
              GitHub
            </a>
          </span>
        </div>
        <div className="toggle">
          <ToggleButton />
        </div>
      </div>
    </HeaderStyled>
  );
}
