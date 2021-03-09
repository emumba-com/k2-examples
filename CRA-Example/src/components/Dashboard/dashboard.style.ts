import styled from "styled-components";

export const DashboardStyled = styled.main`
  margin: 0 auto;
  margin-top: 50px;
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
  .tooltip.type-dark.show {
    > div > div {
      background: none !important;
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

export const ChartFilterDivStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  .section-1 {
    flex-basis: 50%;
  }
  .section-2 {
    flex-basis: 50%;
  }
`;

export const FilterContainerDivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  background-color: #f6f6f6;
  .filter-title {
    color: #6e79ff;
    font-weight: bolder;
    font-size: 16px;
  }
`;
