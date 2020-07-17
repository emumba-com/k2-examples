import React from "react";
import { CSSProperties } from "styled-components";

import { HeaderStyled, TitleStyled } from "./contentHeader.style";

interface ContentHeaderProps {
  children?: React.ReactNode;
  style?: CSSProperties;
}

const ContentHeader: React.SFC<ContentHeaderProps> = ({
  children,
  style,
}: ContentHeaderProps) => {
  return (
    <HeaderStyled style={style}>
      <TitleStyled>{children}</TitleStyled>
    </HeaderStyled>
  );
};

export default ContentHeader;
