import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./fairdataPioneerStyles";
import { ReactComponent as StarsPatternSVG } from "../../media/icons/stars-pattern.svg";
export interface Props {}

function FairdataPioneer(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.fairdataPioneer}>
      <div className={classes.container}>
        <div className={classes.title}>Be a fair data pioneer</div>
        <div className={classes.badgeContainer}>
          <div className={`${classes.badge} ${classes.badgeTop}`}>
            Introduce <b>freedom</b>, <b>control</b> and <b>interoperability</b>{" "}
            to your project
          </div>
          <StarsPatternSVG
            className={`${classes.badgeShape} ${classes.badgeTopShape}`}
          />
        </div>
        <div className={classes.badgeContainer}>
          <div className={`${classes.badge} ${classes.badgeBottom}`}>
            by merging <b>convenience</b> with <b>decentralization</b>
          </div>
          <StarsPatternSVG
            className={`${classes.badgeShape} ${classes.badgeBottomShape}`}
          />
        </div>
        <div className={classes.subtitle}>
          and be one of the first to do it.
        </div>
      </div>
    </div>
  );
}

export default React.memo(FairdataPioneer);
