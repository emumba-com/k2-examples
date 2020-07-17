import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { CenterLabelStyled } from "./pieCenterLabel.style";

export const PieCenterLabel = () => {
  const {
    textColors: { heading: color },
  } = useContext(ThemeContext);
  return (
    <>
      <CenterLabelStyled>900k</CenterLabelStyled>
      <label style={{ color }}>Total Revenue</label>
    </>
  );
};
