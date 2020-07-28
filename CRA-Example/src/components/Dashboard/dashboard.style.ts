import styled from "styled-components";

export const DashboardStyled = styled.main`
  min-width: 1366px;
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 112px;
  padding-top: 6px;
  .rv-xy-plot__axis__tick__text {
    font-size: 12px;
  }
  .rv-xy-plot__series--label-text {
    font-size: 13px;
  }
  .crosshair-root .crosshair-item {
    color: #777777;
  }
  .crosshair-header {
    font-weight: bold;
  }
  .highcharts-container {
    width: 100% !important;
  }
  .highcharts-root {
    width: 100% !important;
  }
  }
`;

export const CardDividerDivStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  .section-1 {
    flex-grow: 1;
  }
  .section-2 {
    padding-top: 15px;
  }
`;