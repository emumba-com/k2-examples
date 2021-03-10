import styled from "styled-components";

export const PieChartDrilldownWrapperStyled = styled.div`
  height: 100%;
  position: relative;
  .back-button {
    position: absolute;
    left: 0;
    top: 20px;
  }
  .pieXYPlot {
    margin-top: 7px;
  }
`;

export const PieChartFilteredDivStyled = styled.div`
  margin: 40px 10px;
  
  .tiles-container {
    height: 300px;
    @media (max-width: 480px) {
      height: unset;
    }
  }
`;
