import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./footerStyles";

import { ReactComponent as SwarmLogotypeBlackSVG } from "../../media/images/logotypes/swarm.svg";
import { ReactComponent as FDSBlackSVG } from "../../media/images/logotypes/fds.svg";

export interface Props {}

function Footer(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  return (
    <footer className={classes.footer}>
      <div className={`${classes.column} ${classes.left}`} style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div className={classes.links}>
            <SwarmLogotypeBlackSVG className={classes.linkIcon} />
            <FDSBlackSVG className={classes.linkIconFSB} />
        </div>
        <a
          className={classes.link}
          href="https://app.fairdrive.fairdatasociety.org/terms"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
