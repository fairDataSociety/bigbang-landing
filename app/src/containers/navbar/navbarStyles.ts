import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./navbar";

const useStyles = makeStyles(() =>
  createStyles({
    Navbar: {
      color: (style: Props & Theme) => style.textColorPrimary,
      font: (style: Props & Theme) => style.typography.h4,
      padding: "0 3rem",
      width: "100%",
      height: "8rem",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      // position: "absolute",
      justifyContent: "space-between",
      left: 0,
      top: 0,
      background: (style: Props & Theme) => style.backgroundDark2,
      "&.open": {
        position: "fixed",
        zIndex: 1000,
        background: (style: Props & Theme) => style.backgroundDark2,
      },
      "@media (min-width: 960px)": {
        padding: "0 6rem",
      },
    },
    navMenu: {
      height: "100%",
      margin: "0 0 0 auto",
      display: "none",
      alignItems: "center",
      flexDirection: "row",
      "&.open": {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        justifyContent: "flex-start",
        gap: "4rem",
        width: "100vw",
        height: "100%",
        top: "7rem",
        left: 0,
        background: (style: Props & Theme) => style.backgroundDark2,
        zIndex: 1000,
      },
      "@media (min-width: 960px)": {
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      },
    },
    navLink: {
      //   margin: "0 0 6rem",
      textAlign: "center",
      padding: "1.5rem 1.8rem",
      color: (style: Props & Theme) => style.textColorPrimary,
      font: "500 2.5rem var(--font1)",
      borderRadius: (style: Props & Theme) => "0.5rem",
      border: "1px solid transparent",
      "&:hover": {
        //font: (style: Props & Theme) => style.typography.body3,
        borderColor: (style: Props & Theme) => style.backgroundWhite,
      },
      "&:active": {
        borderColor: (style: Props & Theme) => style.backgroundWhite,
      },
      "&:nth-child(1)": {
        margin: "10rem 0 0 0",
      },
      "@media (min-width: 960px)": {
        margin: "auto 0 auto 3rem",
        font: (style: Props & Theme) => style.typography.subtitleSmall,
        "&:nth-child(1)": {
          margin: "inherit",
        },
      },
    },
    secondary: {},
    themeTrigger: {
      margin: "0",
      padding: "1.5rem 0",
      "&:hover": {
        borderColor: (style: Props & Theme) => "transparent",
      },
      "@media (min-width: 960px)": {
        padding: "1.5rem 1.5rem 1.5rem 1.5rem",
      },
      "&.open": {
        display: "none",
      },
    },
    actionButton: {
      color: "#F8FCFF",
      background: "var(--gradientButton)",
      font: "500 2.5rem var(--font1)",
      borderRadius: (style: Props & Theme) => "0.5rem",
      textAlign: "center",
      padding: "2rem 3rem",
      "@media (min-width: 960px)": {
        padding: "1.5rem 1.8rem",
        font: (style: Props & Theme) => style.typography.subtitleSmall,
      },
    },
    logo: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      // transform: "translateX(-5px)",
      width: "16rem",
      "@media (min-width: 960px)": {
        transform: "translateX(0)",
      },
    },
    logoItemsWrapper: {
      display: "flex",
      alignItems: "flex-end",
    },
    logoImage: {
      width: "2.7rem",
    },
    logoTitle: {
      marginLeft: "0.6rem",
      color: (style: Props & Theme) => style.textColorHoverSelected,
      font: "500 2.6rem var(--font1)",
    },
    themeIcon: {
      marginLeft: "0",
      display: "flex",
      margin: "auto",
      fill: (style: Props & Theme) => style.textColorPrimary,
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
      "@media (min-width: 960px)": {
        transform: "translateX(0)",
        width: "2.5rem",
        height: "2.5rem",
      },
    },
    mobileElementsWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "2rem",
      width: "20rem",
      "@media (min-width: 960px)": {
        display: "none",
      },
    },
    mobileThemeTrigger: {
      width: "7rem",
      height: "auto",
    },
    navIcon: {
      width: "25px",
      height: "10px",
      position: "relative",
      // margin: "20px 0 auto",
      transform: "rotate(0deg)",
      transition: ".5s ease-in-out",
      cursor: "pointer",
      display: "flex",
      alignSelf: "center",
      "@media (min-width: 960px)": {
        display: "none",
      },
    },
    bar: {
      display: "block",
      position: "absolute",
      height: "1px",
      width: "100%",
      background: (style: Props & Theme) => style.backgroundWhite,
      opacity: 1,
      left: 0,
      transform: "rotate(0deg)",
      transition: ".25s ease-in-out",
      "&:nth-child(1)": {
        top: "0px",
        transformOrigin: "left center",
        "&.open": {
          transform: "rotate(45deg)",
          top: "-4px",
          left: "3px",
        },
      },
      "&:nth-child(2)": {
        top: "9px",
        transformOrigin: "left center",
        "&.open": {
          transform: "rotate(-45deg)",
          top: "14px",
          left: "3px",
        },
      },
    },
  })
);

export default useStyles;
