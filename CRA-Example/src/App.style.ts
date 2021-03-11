import { createGlobalStyle } from "styled-components";
import { ThemeParameterProps } from "@k2/utils";

export const BaseStyle = createGlobalStyle<{ theme: ThemeParameterProps }>`
  html {
    body {
      padding: 0;
      margin: 0;
      font-family: OpenSans-Regular;
      background: ${props => props.theme.backgroundColors.main};
        line-height: 1.3;
        margin: 0;
        padding: 0;  
    }
    // customizing antd select-menu classes
    .ant-select-dropdown-menu{
      background-color: ${({ theme }) => theme.backgroundColors.card};
    }
    .ant-select-dropdown-menu-item {
      background-color: ${({ theme }) =>
        theme.backgroundColors.card} !important ;
      color: ${({ theme }) => theme.textColors.normal};
      :hover{
         background-color: ${({ theme }) =>
           theme.backgroundColors.card} !important ;
      }
    }
     .ant-dropdown-menu{
      background-color:${({ theme }) => theme.backgroundColors.card};
    }
    .ant-dropdown-menu-item{
      color: ${({ theme }) => theme.textColors.normal};

    }
    .ant-dropdown-menu-item:hover{
      background-color: #efefef;

    }
   .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{
      color: ${({ theme }) => theme.textColors.normal} ;
    }
  }

`;
