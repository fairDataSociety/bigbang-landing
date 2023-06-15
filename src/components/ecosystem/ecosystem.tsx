import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./ecosystemStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ecosystemLinks, ecosystemLinksLight } from "./ecosystemLinks";
import { YourDapp } from "../icons/icons";

export interface Props {}

function Ecosystem(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  const isMobile = useMediaQuery("(max-width:960px)");

  return (
    <div className={classes.container}>
      <div className={classes.title}>Ecosystem</div>
      {theme.name === "dark" ? (
        <div className={classes.imageContainer}>
          {ecosystemLinks.map((i) => (
            <a
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.item}
            >
              <div className={classes.icon}>{i.icon}</div>
              <div className={classes.label}>{i.label}</div>
            </a>
          ))}
        </div>
      ) : (
        <div className={classes.imageContainer}>
          {ecosystemLinksLight.map((i) => (
            <a
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.item}
            >
              <div className={classes.icon}>{i.icon}</div>
              <div className={classes.label}>{i.label}</div>
            </a>
          ))}
        </div>
      )}
      <a
        href="src/components/ecosystem/ecosystem"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.item}
      >
        <YourDapp className={classes.dappIcon} />
        <h6 className={classes.dappLabel}>Your Dapp!</h6>
      </a>
    </div>
  );
}

export default React.memo(Ecosystem);
