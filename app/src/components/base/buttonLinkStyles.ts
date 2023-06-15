import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./buttonLink";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      margin: "2rem auto 0 auto",
      borderRadius: "0.5rem",
      color: "#F8FCFF",
      background: "var(--gradientButton)",
      textAlign: "center",
      padding: "2rem 4rem",

      //   "&:hover": {
      //     background: (style: Props & Theme) => style.backgroundLight3,
      //   },
      "&:active": {
        borderColor: (style: Props & Theme) => style.backgroundWhite,
      },
      font: "500 2.8rem var(--font1)",

      "@media (min-width: 960px)": {
        padding: "1.5rem 4rem",
        font: (style: Theme & Props) => style.typography.subtitleSmall,
      },
    },
  })
);

export default useStyles;
