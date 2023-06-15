import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./goalsStyles";
import keywordDiagramDark from "../../media/images/keyword_diagram_dark.svg";
import keywordDiagramLight from "../../media/images/keyword_diagram_light.svg";
import MobileOverlay from "../mobileOverlay/mobileOverlay";

export interface Props {}

function Goals(props: Props) {
  const { theme } = useTheme();
  const classes = useStyles({ ...props, ...theme });

  return (
    <section className={classes.goals}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.content}>
            <h1 className={classes.header}>Goals for Fairdrive</h1>
            <div>
              <p className={classes.p1}>
                <b>
                  Fairdrive aims to bring the practicality of web 2.0 to
                  Blockchain.
                </b>
              </p>
              <p className={classes.p2}>
                We invite you to be one of the first to bring your project to
                life on a completely decentralized platform looking for ways to
                escape the data monopoly and on its way to a fair data economy.
                The Fair Data Society principles sustain the ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.imageContainer}>
            <img
              alt="screen shot demo"
              className={classes.image}
              src={
                theme.name === "dark" ? keywordDiagramDark : keywordDiagramLight
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Goals);
