import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./alertBanner";

const useStyles = makeStyles(() =>
  createStyles({
    AlertBanner: {
      width: "calc(100% - 6rem)",
      height: "auto",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexWrap: "wrap",
      background: (style: Props & Theme) => style.purple,
      padding: "3rem",
      margin: "3rem",
      borderRadius: "2rem",
      zIndex: 1010,

      "@media (min-width: 960px)": {
        padding: 0,
        flexWrap: "nowrap",
        background: "transparent!important",
        width: "100%",
        marginTop: "2rem",
        height: "8rem",
        borderTop: "1px solid #A6B7FF",
        borderBottom: "1px solid #A6B7FF",
        margin: "0",
        borderRadius: "0",

        transform: "none",
      },
    },
    itemsWrapper: {
      display: "flex",
      gap: "2rem",
      alignItems: "center",
      flexDirection: "column",
      "@media (min-width: 960px)": {
        flexDirection: "row",
      },
    },
    warningIcon: {
      float: "left",
      margin: "auto",
      flex: " 0 0 100%",
      "@media (min-width: 960px)": {
        flex: " 0 0 auto",
      },
    },
    betaWarningText: {
      flex: " 0 0 100%",
      textAlign: "center",
      font: (style: Props & Theme) => style.typography.subtitleLarge,
      color: "#fcfdff",
      margin: "2rem 0 2rem",
      "@media (min-width: 960px)": {
        font: (style: Props & Theme) => style.typography.subtitleSmall,
        flex: " 0 0 auto",
        color: (style: Props & Theme) => style.textColorPrimary,

        margin: "auto",
      },
    },
    agree: {
      margin: "auto",
      border: "1px solid #fcfdff",

      borderRadius: (style: Props & Theme) => "0.5rem",
      cursor: "pointer",
      padding: "1.3rem 2rem",
      color: "#fcfdff",
      font: (style: Props & Theme) => style.typography.subtitleLarge,
      "&:hover": {
        border: (style: Props & Theme) => `1px solid ${style.backgroundWhite}`,
      },
      "&:active": {
        border: (style: Props & Theme) => `1px solid ${style.backgroundWhite}`,
      },
      "@media (min-width: 960px)": {
        padding: "1rem 2rem",
        border: (style: Props & Theme) => `1px solid ${style.backgroundLight3}`,
        color: (style: Props & Theme) => style.textColorPrimary,
      },
    },
    warning: {
      padding: "2rem",
      width: "150rem",
      border: (style: Props & Theme) => `1px solid ${style.textColorPrimary}`,
      textAlign: "center",
      font: (style: Props & Theme) => style.typography.h6,
      borderRadius: "1rem",
      flexDirection: "row",
      marginBottom: "12rem",
    },
  })
);

export default useStyles;
