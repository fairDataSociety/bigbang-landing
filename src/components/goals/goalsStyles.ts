import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./goals";

const useStyles = makeStyles(() =>
  createStyles({
    goals: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto 15rem",
      "@media (min-width: 960px)": {
        margin: "0 auto 15rem",
      },
    },
    container: {
      flexDirection: "row",
      width: "100%",
      // maxWidth: '180rem',
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 auto",
      //   padding: "0 3rem 2rem",
      position: "relative",
      flexWrap: "wrap",

      "@media (min-width: 960px)": {
        // padding: "2rem 10rem",
        display: "flex",

        margin: "0 auto 0 auto",
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
        paddingRight: "2%",
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
      color: (style: Props & Theme) => style.purple,
      textAlign: "center",
      font: "600 6rem var(--font1);",
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
        font: "600 2rem var(--font1)",
        margin: "2rem",
      },
    },
    p2: {
      color: (style: Props & Theme) => style.textDark1,

      opacity: 0.8,
      margin: "0 0 4rem",
      font: "400 2.8rem var(--font1)",
      "@media (min-width: 960px)": {
        font: "400 2rem var(--font1)",
        margin: "2rem",
      },
    },
    paragraphLink: {
      color: (style: Props & Theme) => style.purple,
    },
  })
);

export default useStyles;
