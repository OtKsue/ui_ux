import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#150a61",
  textColor: "white",
  infoIconColor: "#514791",
  iconColor: "#413494",
  accentColor1: "#291896",
  accentColor2: "#19059c",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "23px",
  textSizeTitle900: "48px",
  textSizeTitle700: "20px",
  textSizeTitle500: "20px",

  textSizeTextL: "20px",
  textSizeTextL900: "18px",
  textSizeTextL700: "18px",
  textSizeTextL500: "18px",

  textSizeTextM: "14px",
  textSizeTextM900: "12px",
  textSizeTextM700: "12px",
  textSizeTextM500: "12px",

  textSizeTextS: "10px",
  textSizeTextS900: "8px",
  textSizeTextS700: "8px",
  textSizeTextS500: "8px",

  borderRadius: "8px",
};

export const lightTheme = {
  backgroundColor: "#e5f3ff",
  textColor: "black",
  infoIconColor: "#cae4fc",
  iconColor: "#a8bced",
  accentColor1: "#4e91cf",
  accentColor2: "#4e91cf",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "23px",
  textSizeTitle900: "48px",
  textSizeTitle700: "20px",
  textSizeTitle500: "20px",

  textSizeTextL: "20px",
  textSizeTextL900: "18px",
  textSizeTextL700: "18px",
  textSizeTextL500: "18px",

  textSizeTextM: "14px",
  textSizeTextM900: "12px",
  textSizeTextM700: "12px",
  textSizeTextM500: "12px",

  textSizeTextS: "10px",
  textSizeTextS900: "8px",
  textSizeTextS700: "8px",
  textSizeTextS500: "8px",

  borderRadius: "8px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'ui-rounded';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
