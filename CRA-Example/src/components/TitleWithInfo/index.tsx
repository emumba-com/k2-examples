import React from "react";
import { Tooltip, makeUId, showTooltip } from "@k2/utils";
import { TooltipContainer } from "./tooltipWithInfo.style";
import { withTheme } from "styled-components";
import { Icon } from "antd";

type Props = {
  title: string;
  infoText?: string;
  theme?: any;
};

const TitleWithInfo = ({ title, infoText = null, theme }: Props) => {
  const { mode } = theme;
  const tooltipId = makeUId();
  return (
    <>
      <span>{title}</span>
      {infoText && (
        <TooltipContainer
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) =>
            showTooltip(
              e.target as HTMLElement,
              JSON.stringify({ msg: infoText }),
              tooltipId,
            )
          }
        >
          <Icon className="explanation-icon" type="question" />
          <Tooltip
            id={tooltipId}
            formatter={e => e.data.msg}
            type={mode === "light" ? "light-default" : "dark"}
          />
        </TooltipContainer>
      )}
    </>
  );
};

export default withTheme<any>(TitleWithInfo);
