import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

type Props = {
  onClick: () => void;
  label: string;
};
const DivStyled = styled.div`
  padding: 8px 0px;
  font-weight: bold;
  z-index: 2;
  cursor: pointer;
  color: #30b1d9;
  font-size: 12px;
`;
const BackButton = ({ onClick, label = "Back" }: Props) => {
  return (
    <DivStyled className="back-button" onClick={onClick}>
      <Icon type="arrow-left" /> {label}
    </DivStyled>
  );
};
export default BackButton;
