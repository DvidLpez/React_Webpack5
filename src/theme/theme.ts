import ITheme from "../interfaces/ITheme";

export const theme: ITheme = {
  fonts: {
    style: {
      primary: "'Source Sans Pro', sans-serif",
    },
    size: {
      small: "0.9em",
      default: "1em",
      medium: "1.2em",
      large: "1.6em",
      big: "2em",
      extra: "3em",
      extraBig: "5em",
    },
    weight: {
      bold: "600",
    },
  },
  colors: {
    white: "#fff",
    lightgrey: "#7c7c7c",
    link: "#000",
    border: "#dbdbdb",
    labelSearch: "#377d6a",
    placeholder: "#cccccc",
    success: "#008000",
    closed: "#c60404",
    danger: "#932323",
    bgBody: "#fafafa",
    bgButtons: "#414141",
    bgComment: "#fff9d6",
    gradient: {
      bgHeader:
        "linear-gradient(to right, #3e9e7e 0%, #2e755d 10%, #205040 20%, #414141 30%)",
    },
    shadow: {
      linkHome: "2px 4px 11px 1px rgba(138, 138, 138, 1)",
      inputSearch: "0 0 20px 5px rgba(163, 163, 163, 1)",
      labelSearch: "0 1px 0 rgba(19, 74, 70, 0.4)",
    },
  },
  spaces: {
    none: "0",
    center: "center",
    button: "10px 40px",
    borderRadius: "5px",
    s5: "5px",
    s10: "10px",
    s15: "15px",
    s20: "20px",
    s25: "25px",
    s30: "30px",
    s50: "50px",
    p55: "5px 5px",
    p100: "10px 0",
    p1520: "15px 20px",
    p1010: "10px 10px",
    p1515: "15px 15px",
    p2020: "20px 20px",
    p2525: "25px 25px",
    p3030: "30px 30px",
  },
};
