import styled from "styled-components";

export const HeaderStyled = styled.header`
  box-shadow: 0 7px 7px 0 rgba(136, 136, 136, 0.09);
  background: #2b4654;
  top: 0;
  left: auto;
  right: 0;
  z-index: 2;
  height: 50px;
  width: 100%;
  position: fixed;
  .header-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    padding: 12.5px;
    margin: 0 auto;
    max-width: 1600px;
    height: 100%;
  }
  .heading {
    grid-area: 1 / 2 / 2 /6;
    align-self: center;
    justify-self: center;
    color: #d0e3e8;
    > span > a {
      color: #d0e3e8;
      text-decoration: underline;
    }
  }
  .toggle {
    grid-area: 1 / 6 / 2 /7;
    color: #d0e3e8;
    align-self: center;
    justify-self: end;
  }
`;
