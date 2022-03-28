export const size = {
  MobileExtraSmall: "320px",
  MobilePortrait: "560px",
  mobile: "768px",
  tablet: "1024px",
  desktop: "1200px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  deksop: `@media (min-width: ${size.desktop})`,
};
