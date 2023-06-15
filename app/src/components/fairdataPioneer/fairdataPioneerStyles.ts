import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./fairdataPioneer";
import StarSVG from "../../media/icons/star.svg";

const useStyles = makeStyles(() =>
  createStyles({
    fairdataPioneer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      margin: "10rem 0 25rem 0",
    },
    container: {
      flexDirection: "row",
      width: "100%",
      maxWidth: "180rem",
      height: "auto",
      display: "flex",
      margin: "0 auto",
      padding: "2rem 0",
      position: "relative",
      flexWrap: "wrap",
      "@media (min-width: 960px)": {
        padding: "2rem 0",
        display: "flex",
        margin: "20rem auto 15rem auto",
      },
    },
    title: {
      flex: "0 0 100%",
      paddingBottom: "4rem",
      color: (style: Props & Theme) => style.purple,
      font: "700 6rem var(--font1)",
      textAlign: "center",
      "@media (min-width: 960px)": {
        textAlign: "left",
      },
    },
    badgeContainer: {
      flex: "0 0 100%",
      display: "flex",
      marginBottom: "2rem",
      position: "relative",
    },
    badge: {
      display: "block",
      width: "100%",
      background: (style: Props & Theme) => style.backgroundDark2,
      borderRadius: "0.8rem",
      padding: "3.2rem 2rem 3.2rem 2rem",
      font: "400 2.5rem var(--font1)",
      boxShadow: "0px 20px 40px 0px #47399966",
      zIndex: 2,
      "@media (min-width: 960px)": {
        position: "relative",

        display: "inline-block",
        width: "auto",
      },
    },
    badgeTop: {
      margin: "1.5rem  4rem 1.5rem 10rem",
      "@media (min-width: 960px)": {
        transform: "translate(9rem)",
        margin: "1.5rem  4rem 1.5rem 5rem",
      },
    },
    badgeShape: {
      position: "absolute",
      width: "200px",
      height: "auto",
      zIndex: "unset",
    },
    badgeTopShape: {
      transformOrigin: "left",
      transform: "translate(0rem, 10%) scale(0.8)",
      "@media (min-width: 960px)": {
        transform: "translate(25rem, 25%) scale(1.1)",
      },
      "@media (min-width: 1299px)": {
        transform: "translate(30rem, 29%) scale(1.2)",
      },
    },
    badgeBottomShape: {
      right: 0,
      transformOrigin: "50% 50%",
      transform: "translate(-15rem, -100%) scale(1.4)",
      display: "none",
      "@media (min-width: 960px)": {
        display: "block",
        transform: "translate(-15rem, -95%) scale(1.1)",
      },
      "@media (min-width: 1299px)": {
        transform: "translate(-15rem, -100%) scale(1.2)",
      },
    },
    badgeBottom: {
      margin: "1.5rem  4rem 1.5rem 10rem",
      "@media (min-width: 960px)": {
        margin: "0rem auto auto",
        transform: "translateX(20%)",
      },
    },
    subtitle: {
      width: "100%",
      textAlign: "right",
      font: (style: Theme & Props) => style.typography.h5,
      color: (style: Props & Theme) => style.purple,
      margin: " 0 5rem 0 25rem",
      "@media (min-width: 960px)": {
        marginRight: "0 15rem 0",
      },
    },
  })
);

export default useStyles;
