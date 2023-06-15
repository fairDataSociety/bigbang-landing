import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./overview";

const useStyles = makeStyles(() =>
  createStyles({
    Overview: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      marginTop: "5rem",
    },
    demoSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "auto",
      marginBottom: "8rem",
    },
    headingBig: {
      textAlign: "center",
      maxWidth: "120rem",
      font: "600 5rem var(--font1)",
      color: (style: Props & Theme) => style.purple,
      marginBottom: "7rem",

      "& span": {
        color: (style: Props & Theme) => style.purple,
      },
      "@media (min-width: 960px)": {
        font: "600 6rem var(--font1)",
        marginBottom: "4rem",
      },
    },
    headingSmall: {
      color: (style: Props & Theme) => style.textColorPrimary,
      font: "500 3rem var(--font1)",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: "7rem",
      "@media (min-width: 960px)": {
        font: (style: Theme & Props) => style.typography.subtitleLarge,
        marginBottom: "2.5rem",
      },
    },
    paragraphBold: {
      textAlign: "left",
      font: "600 4rem var(--font1)",
      color: (style: Props & Theme) => style.purple,
      marginBottom: "7rem",
      maxWidth: "76rem",
      "@media (min-width: 960px)": {
        font: "600 3rem var(--font1)",
        textAlign: "center",

        marginBottom: "2.4rem",
      },
    },
    paragraph: {
      textAlign: "left",
      maxWidth: "76rem",
      font: "400 2.8rem var(--font1)",
      marginBottom: "7rem",
      color: (style: Props & Theme) => style.textDark1,
      "@media (min-width: 960px)": {
        textAlign: "center",
        maxWidth: "90rem",
        font: "400 2rem var(--font1)",
      },
    },
    buttonParagraph: {
      font: "400 2.8rem var(--font1)",
      color: (style: Props & Theme) => style.textDark1,
      flex: " 0 0 100%",
      textAlign: "center",
      marginBottom: "2rem",

      "@media (min-width: 960px)": {
        font: (style: Theme & Props) => style.typography.subtitleSmall,
        flex: " 0 0 auto",
        textAlign: "left",
        marginBottom: 0,
      },
    },
    buttonBar: {
      width: "calc(100vw - 40rem)",
      minWidth: "40rem ",
      background: (style: Props & Theme) => style.backgroundDark2,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      height: "auto",
      justifyContent: "center",
      borderRadius: "1rem",
      padding: "4rem",
      boxShadow: "0px 20px 40px 0px #47399966",

      "@media (min-width: 960px)": {
        margin: "4rem auto",
        height: "7rem",
        flexWrap: "nowrap",
        padding: "1.2rem 2rem",
        justifyContent: "space-between",
        width: "65rem",
      },
    },
    link: {
      borderRadius: "0.5rem",
      color: "#F8FCFF",
      background: "var(--gradientButton)",
      textAlign: "center",
      padding: "2rem 4rem",
      font: "500 2.8rem var(--font1)",
      "@media (min-width: 960px)": {
        padding: "1.5rem 1.8rem",
        font: (style: Theme & Props) => style.typography.subtitleSmall,
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
  })
);

export default useStyles;
