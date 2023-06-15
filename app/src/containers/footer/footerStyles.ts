import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./footer";

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      margin: "auto 0 0 0",
      padding: "5.8rem 8rem",
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "5rem",

      font: (style: Props & Theme) => style.typography.caption1,
      color: (style: Props & Theme) => style.textColorSecondary,
      background: (style: Props & Theme) => style.backgroundDark2,
      "@media (min-width: 960px)": {
        gap: "0",
        padding: "3rem 8rem 5.8rem 8rem",
      },
    },
    column: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      flex: "0 0 100%",
      "@media (min-width: 960px)": {
        alignItems: "flex-start",
        flex: "0 0 auto",
      },
    },
    left: {
      margin: "0 auto 0 0",
      justifyContent: "space-between",
    },
    right: {
      margin: "0 0 0 auto",
      alignItems: "center",
      justifyContent: "space-between",
      "@media (min-width: 960px)": {
        alignItems: "stretch",
      },
    },
    text: {
      font: (style: Props & Theme) => style.typography.caption1,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      margin: "0 1rem",
    },
    footerText: {
      margin: "0 1rem",
    },
    link: {
      marginTop: "1.5rem",
      "&:hover": {
        filter: "brightness(1.6)",
      },
      "@media (min-width: 960px)": {
        marginTop: 0,
      },
    },
    links: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      margin: "3rem 0 2rem 0",
      flexWrap: "wrap",
      gap: "2rem",
      "@media (min-width: 960px)": {
        margin: "3rem 0",
        gap: "5rem",
      },
    },
    linksRight: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      margin: "4rem 0 0 0",
      height: "100%",
      gap: "5rem",
      "@media (min-width: 960px)": {
        margin: "3rem 0",
      },
    },
    linkItem: {
      margin: "auto",
    },
    linkIcon: {
      fill: (style: Props & Theme) => style.textColorPrimary,
      height: "5rem",
      width: "auto",
      "@media (min-width: 960px)": {
        height: "4rem",
      },
    },
    linkIconFSB: {
      fill: (style: Props & Theme) => style.textColorPrimary,
      height: "8rem",
      width: "auto",
      "@media (min-width: 960px)": {
        height: "5.9rem",
      },
    },
    socialIcon: {
      fill: (style: Props & Theme) => style.textColorPrimary,
      width: "4rem",
      height: "4rem",
    },
    divider: {
      border: (style: Props & Theme) => `1px solid ${style.backgroundDark1}`,
      height: "3rem",
      width: "1px",
      margin: "0 0.5rem",
    },
  })
);

export default useStyles;
