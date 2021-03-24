export default interface ITheme {
  theme: {
    fonts: {
      style: string;
      small: string;
      default: string;
      medium: string;
      large: string;
      big: string;
      extra: string;
      extraBig: string;
      bold: string;
    };
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      grey: string;
      lightgrey: string;
      gradient: string;
      title: string;
      success: string;
      closed: string;
      danger: string;
      backComment: string;
      shadow: string;
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
  };
}
