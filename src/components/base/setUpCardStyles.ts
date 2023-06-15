import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./setUpCard";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      margin: "0 3rem 3rem",
      borderRadius: "1rem",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "auto",
      padding: "4rem",
      justifyContent: "space-between",

      "@media (min-width: 960px)": {
        margin: "0 0 auto",
      },
    },
    iconTitleContainer: {
      display: "flex",
      msFlexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      flexDirection: "column",

      "@media (min-width: 960px)": {},
    },
    iconWrapper: {
      boxShadow: "0px 20px 40px 0px #47399966",
    },
    header: {
      margin: "3rem 0 2rem ",
      color: (style: Props & Theme) => style.blueElectric,
      font: "600 4rem var(--font1)",
      "@media (min-width: 960px)": {
        font: "600 2.5rem var(--font1);",
      },
    },
    body: {
      textAlign: "center",
      margin: "auto",
      font: "400 2.8rem var(--font1)",
      "@media (min-width: 960px)": {
        font: (style: Props & Theme) => style.typography.caption1,
      },
    },
  })
);

export default useStyles;
