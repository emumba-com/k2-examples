import styled from "styled-components";
import dotBackground from "../../dots.png";

export const TilesWrapper = styled.div<{ columns?: number }>`
  padding: 15px 15px 0 15px;
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 5}, 1fr);
  grid-gap: 10px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TileStyled = styled("div")<{
  backgroundColor: string;
  background?: string;
  valueColor: string;
  titleColor: string;
  boxShadow: boolean;
  statusColor: string;
}>`
  width: 100%;
  height: 80px;
  box-shadow: ${props =>
    props.boxShadow ? "0 3px 15px 0 rgba(0, 0, 0, 0.07)" : "none"};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: ${props => props.background || props.backgroundColor};

  .value-wrapper {
    display: flex;
    align-items: center;
    padding: 7px 10px 3px 10px;
    border-radius: 4px 4px 0 0;
    background: url('${dotBackground}');
  }

  .status {
    padding: 0 8px;
    margin-top: 8px;
    display: flex;

    .status-icon {
      width: 10px;
      height: 10px;
      display: inline-block;
    }
    .percent {
      color: ${props => props.statusColor};
    }

    h4 {
      color: white;
      margin-left: 2px;
    }
  }

  .value {
    color: ${props => props.valueColor};
    font-weight: bold;
    font-size: 30px;
    margin: 0 0 3px;
  }

  .title {
    color: ${props => props.titleColor};
    font-size: 13px;
    padding: 5px 10px 5px 10px;
    border-radius: 0 0 5px 5px;
  }
`;
