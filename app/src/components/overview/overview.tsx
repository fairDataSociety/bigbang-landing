import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./overviewStyles";
import FDScreenshot from "../../media/images/fairdrive-overview.png";

import MobileOverlay from "../mobileOverlay/mobileOverlay";

export interface Props {
  // isAlertShow: boolean;
}

function Overview(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.Overview}>
      <div className={classes.demoSection} style={{marginBottom: '0'}}>
        <p className={classes.headingBig}>
          Your Digital Safe Space
        </p>
        <p className={classes.paragraph} style={{marginBottom: '0'}}>
          Welcome to Fairdrive, the web3 drive that puts you in charge of your data. Say goodbye to centralized clouds and hello to total control, advanced security, and decentralized storage.
        </p>
      </div>
    </div>
  );
}

export default React.memo(Overview);
