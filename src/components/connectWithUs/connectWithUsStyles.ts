import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./connectWithUs";

const useStyles = makeStyles(() =>
  createStyles({
    connectWithUsWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-center",
      marginBottom: "18rem",
    },
    title: {
      paddingTop: "15rem",
      paddingBottom: "7rem",
      textAlign: "center",
      color: (style: Props & Theme) => style.purple,
      font: "600 6rem var(--font1);",
      "@media (min-width: 960px)": {
        font: "700 4rem var(--font1);",
      },
    },
    cardContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "auto",
      flexWrap: "wrap",
      marginBottom: "6rem",
      "@media (min-width: 960px)": {
        width: "33%",
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
    newsletterBar: {
      display: "flex",
      alignSelf: "center",
      width: "calc(100% - 40rem)",
      minWidth: "40rem ",
      padding: "3rem 3rem",
      gap: "4rem",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "2rem",
      background: (style: Props & Theme) => style.backgroundDark2,
      boxShadow: "0px 20px 40px 0px #47399966",

      flexDirection: "column",
      "@media (min-width: 960px)": {
        flexDirection: "row",
        padding: "2rem 3rem",

        width: "100rem",
        gap: "2rem",
      },
    },
    newsletterBarPrefix: {
      textAlign: "center",

      font: "400 2.8rem var(--font1)",
      color: (style: Props & Theme) => style.textDark1,
      "@media (min-width: 960px)": {
        font: (style: Theme & Props) => style.typography.subtitleSmall,
        textAlign: "left",
      },
    },
    newsletterBarInput: {
      border: "1px solid var(--dark1)",
      borderRadius: "0.5rem",
      width: "100%",
      maxWidth: "40rem",
      color: (style: Props & Theme) => style.textDark1,
      padding: "1.5rem",
    },
    newsletterBarSubmit: {
      borderRadius: "0.5rem",
      color: "#F8FCFF",
      background: "var(--gradientButton)",
      textAlign: "center",
      padding: "2rem 4rem",
      font: "500 2.8rem var(--font1)",

      "@media (min-width: 960px)": {
        padding: "1.5rem 4rem",
        font: (style: Theme & Props) => style.typography.subtitleSmall,
      },
    },
  })
);

export default useStyles;
