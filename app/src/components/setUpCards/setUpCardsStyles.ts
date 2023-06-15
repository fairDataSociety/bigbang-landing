import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./setUpCards";

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {},
    title: {
      paddingBottom: "12rem",
      textAlign: "center",
      color: (style: Props & Theme) => style.purple,
      font: "600 6rem var(--font1);",
      "@media (min-width: 960px)": {
        font: "700 4rem var(--font1)",
      },
    },
    cardContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "auto",
      flexWrap: "wrap",
      "@media (min-width: 960px)": {
        width: "80%",
        flexWrap: "nowrap",
      },
    },
    icon: {
      padding: "2.4rem 1.6rem  1.6rem  1.6rem",
      width: "auto",
      height: "auto",
      background: (style: Props & Theme) => style.backgroundShadeDark2,
      borderRadius: "0.8rem",
    },
    iconLinksContainer: {
      marginTop: "4rem",
      display: "flex",
      justifyContent: "center",
    },
    iconLink: {
      margin: "0 1.2rem",
    },
  })
);

export default useStyles;
