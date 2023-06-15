import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./ecosystem";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      paddingTop: "7rem",
      paddingBottom: "5rem",
      textAlign: "center",

      color: (style: Props & Theme) => style.purple,
      font: "600 6rem var(--font1);",
      "@media (min-width: 960px)": {
        font: "700 4rem var(--font1);",
        paddingTop: "20rem",
        paddingBottom: "5rem",
      },
    },
    imageContainer: {
      height: "auto",
      display: "flex",
      flexWrap: "wrap",
      margin: "auto",
      justifyContent: "center",
      width: "100%",
      maxWidth: "130rem",
      "@media (min-width: 960px)": {
        display: "flex",
      },
    },
    item: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "25rem",
      position: "relative",
      margin: "1rem 1rem",
    },
    image: {
      width: "100%",
      margin: "auto",
      borderRadius: "1rem",
    },
    icon: {
      width: "auto",
      color: (style: Props & Theme) => style.purple,
    },
    dappIcon: {
      marginTop: "5rem",
      color: (style: Props & Theme) => style.purple,
    },
    label: {
      position: "absolute",
      top: "19rem",
      font: (style: Theme & Props) => style.typography.h6,
      width: "auto",
      maxWidth: "10rem",
    },
    dappLabel: {
      font: (style: Theme & Props) => style.typography.h6,
    },
  })
);

export default useStyles;
