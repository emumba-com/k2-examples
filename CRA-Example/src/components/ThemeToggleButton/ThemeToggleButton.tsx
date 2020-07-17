import React from "react";
import { withTheme } from "styled-components";
import { Switch } from "antd";

import { ThemeToggleContainerStyled } from "./themeToggleButton.style";

function Component({ theme }: any) {
  const { toggleMode } = theme;

  return (
    <ThemeToggleContainerStyled>
      <span className="theme-toggle-label">Dark Theme</span>
      <Switch
        size="small"
        onChange={e => toggleMode && toggleMode(e ? "dark" : "light")}
      />
    </ThemeToggleContainerStyled>
  );
}

export const ToggleButton = withTheme<any>(Component);
