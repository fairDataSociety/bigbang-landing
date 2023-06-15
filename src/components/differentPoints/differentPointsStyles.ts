import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./differentPoints";

const useStyles = makeStyles(() =>
  createStyles({
    WhyFD: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
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
        maxWidth: "93rem",
        display: "flex",
        margin: "5rem auto",
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
      height: "200%",
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
      "&:hover": {
        transform: "translateY(-0.7px) !important",
      },
    },

    "@media (min-width: 900px)": {
      height: "80%",
      display: "flex",
    },

    image: {
      width: "100%",
      margin: "auto",
      borderRadius: "1rem",
    },
    header: {
      font: "600 6rem var(--font1);",
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
    newsletterBarInput: {
      border: "1px solid var(--dark1)",
      borderRadius: "0.5rem",
      width: "100%",
      maxWidth: "40rem",
      color: (style: Props & Theme) => style.textDark1,
      padding: "1.5rem",
    },
    newsletterBar: {
      display: "flex",
      alignSelf: "center",
      width: "calc(100% - 40rem)",
      minWidth: "40rem ",
      padding: "3rem 3rem",
      gap: "4rem",
      alignItems: "center",
      // justifyContent: "space-between",
      borderRadius: "2rem",
      // background: (style: Props & Theme) => style.backgroundDark2,
      // boxShadow: "0px 20px 40px 0px #47399966",
      justifyContent: 'center',

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
