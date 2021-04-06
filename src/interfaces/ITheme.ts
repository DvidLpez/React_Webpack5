export default interface ITheme {
  fonts: {
    style: {
      primary: string;
    };
    size: {
      small: string;
      default: string;
      medium: string;
      large: string;
      big: string;
      extra: string;
      extraBig: string;
    };
    weight: {
      bold: string;
    };
  };
  colors: {
    placeholder: string;
    link: string;
    border: string;
    lightgrey: string;
    white: string;
    success: string;
    closed: string;
    danger: string;
    labelSearch: string;
    bgBody: string;
    bgButtons: string;
    bgComment: string;
    gradient: {
      bgHeader: string;
      opacityBox: string;
    };
    shadow: {
      linkHome: string;
      inputSearch: string;
      labelSearch: string;
      card: string;
    };
  };
  spaces: {
    none: string;
    center: string;
    s5: string;
    s10: string;
    s15: string;
    s20: string;
    s25: string;
    s30: string;
    s50: string;
    p55: string;
    p100: string;
    p1520: string;
    p1010: string;
    p1515: string;
    p2020: string;
    p2525: string;
    p3030: string;
    button: string;
    borderRadius: string;
  };
}
