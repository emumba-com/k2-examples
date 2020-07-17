import React from "react";
import styled from "styled-components";

const TAG_COLORS = { Normal: "#5579ae", Low: "#e77456" };

const StyledLegend = styled.div`
  display: flex;
  text-align: center;

  .legend-container {
    margin-right: 2px;
    font-size: 13px;
    color: ${({ theme }) => theme.textColors.normal};
    text-transform: capitalize;

    .legend-color {
      width: 77px;
      height: 5px;
      margin-top: 2px;
    }
  }
`;

function StaticLegends() {
  const legendsArr = Object.keys(TAG_COLORS);

  return (
    <StyledLegend className="static-legends">
      {legendsArr.map(name => {
        return [
          <div key={`static_legend_${name}`} className="legend-container">
            {name}
            <div
              className="legend-color"
              style={{ backgroundColor: TAG_COLORS[name] }}
            ></div>
          </div>,
        ];
      })}
    </StyledLegend>
  );
}

export default StaticLegends;
