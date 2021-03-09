import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { kFormatter } from "../../utils";

import { CenterLabelStyled } from "./pieCenterLabel.style";

export const PieCenterLabel = ({value=900000}) => {
  const {
    textColors: { heading: color },
  } = useContext(ThemeContext);
  return (
    <>
      <CenterLabelStyled>{kFormatter(value)}</CenterLabelStyled>
      <label style={{ color }}>Total Revenue</label>
    </>
  );
};

export const PopulationPieCenterLabel = () => {
  const {
    textColors: { heading: color },
  } = useContext(ThemeContext);
  return (
    <>
      <CenterLabelStyled>7.3B</CenterLabelStyled>
      <label style={{ color }}>Total Population</label>
    </>
  );
};
