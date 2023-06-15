import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./mobileOverlayStyles";

export interface Props {}

function MobileOverlay(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.MobileOverlay}>
    </div>
  );
}

export default React.memo(MobileOverlay);
