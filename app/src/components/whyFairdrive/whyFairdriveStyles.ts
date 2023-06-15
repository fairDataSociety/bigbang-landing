import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./whyFairdrive";

const useStyles = makeStyles(() =>
  createStyles({
    WhyFD: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      margin: "3rem 0",
    },
    container: {
      flexDirection: "row",
      width: "100%",
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 auto",
      position: "relative",
      flexWrap: "wrap",
      "@media (min-width: 960px)": {
        display: "flex",
        margin: "20rem auto",
      },
    },

    icon: {},
    left: {
      width: "100%",
      height: "100%",
      "@media (min-width: 960px)": {
        width: "50%",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      margin: "auto",
      justifyContent: "center",
      paddingRight: "0%",
      padding: "2rem",
      "@media (min-width: 960px)": {
        paddingRight: "10%",
        padding: "0",
      },
    },
    right: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      "@media (min-width: 960px)": {
        width: "50%",
      },
    },
    imageContainer: {
      height: "auto",
      margin: "auto",
      width: "100%",
      display: "block",
      "@media (min-width: 960px)": {
        height: "80%",
        display: "flex",
      },
    },
    image: {
      width: "100%",
      margin: "auto",
      borderRadius: "1rem",
    },
    header: {
      font: "600 6rem var(--font1);",
      color: (style: Props & Theme) => style.purple,
      textAlign: "center",
      marginBottom: "4rem",
      "@media (min-width: 960px)": {
        font: (style: Props & Theme) => style.typography.h5,
        margin: "2rem",
        textAlign: "left",
      },
    },
    p1: {
      color: (style: Props & Theme) => style.textDark1,

      margin: "3rem 0",
      font: "400 2.8rem var(--font1)",
      "@media (min-width: 960px)": {
        margin: "2rem",
        font: "400 2rem var(--font1)",
      },
    },
    p2: {
      color: (style: Props & Theme) => style.textDark1,
      font: "400 2rem var(--font1)",
      opacity: 0.8,
      margin: "0 0 4rem",
      "@media (min-width: 960px)": {
        margin: "2rem",
      },
    },
    paragraphLink: {
      color: (style: Props & Theme) => style.purple,
    },
  })
);

export default useStyles;
