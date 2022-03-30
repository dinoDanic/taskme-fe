export interface sizesI {
  padding: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  margin: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  font: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export const sizes: sizesI = {
  padding: {
    xs: "4px",
    sm: "6px",
    md: "12px",
    lg: "24px",
    xl: "36px",
    xxl: "68px",
  },
  margin: {
    xs: "4px",
    sm: "6px",
    md: "12px",
    lg: "24px",
    xl: "36px",
    xxl: "68px",
  },
  font: {
    xs: "0.8rem",
    sm: "0.9rem",
    md: "1rem",
    lg: "",
    xl: "",
    xxl: "",
  },
};
