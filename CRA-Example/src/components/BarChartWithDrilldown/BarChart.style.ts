import styled from "styled-components";

export const DrilldownWrapper = styled.div`
  height: 100%;
  position: relative;
  .back-button {
    position: absolute;
    left: 0;
    top: 20px;
  }
  .k2--horizontal-bar-series {
    rect {
      cursor: pointer;
    }
  }
  .k2--d3-chart-inner-wrapper {
    circle {
      cursor: pointer;
    }
  }
`;
