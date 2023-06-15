import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./footerStyles";
import { Twitter, Medium, Discord } from "../../components/icons/icons";
import { Link } from "react-router-dom";

import { ReactComponent as SwarmLogotypeBlackSVG } from "../../media/images/logotypes/swarm.svg";
import { ReactComponent as LinumLabsBlackSVG } from "../../media/images/logotypes/linum-labs.svg";
import { ReactComponent as FDSBlackSVG } from "../../media/images/logotypes/fds.svg";

export interface Props {}

function Footer(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  return (
    <footer className={classes.footer}>
      <div className={`${classes.column} ${classes.left}`}>
        <p>Made in collaboration with these ecosystem partners</p>
        <div className={classes.links}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="src/containers/footer/footer"
          >
            <SwarmLogotypeBlackSVG className={classes.linkIcon} />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="src/containers/footer/footer"
          >
            <FDSBlackSVG className={classes.linkIconFSB} />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="src/containers/footer/footer"
          >
            <LinumLabsBlackSVG className={classes.linkIcon} />
          </a>
        </div>
        <a
          className={classes.link}
          href="https://app.fairdrive.fairdatasociety.org/terms"
        >
          Terms & Conditions
        </a>
      </div>
      <div className={`${classes.column} ${classes.right}`}>
        <p>Join the conversation:</p>
        <div className={classes.linksRight}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={classes.linkItem}
            href="https://discord.gg/RpX5eU4Cpr"
          >
            <Discord className={classes.socialIcon} />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={classes.linkItem}
            href="https://twitter.com/fairdatasociety"
          >
            <Twitter className={classes.socialIcon} />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={classes.linkItem}
            href="src/containers/footer/footer"
          >
            <Medium className={classes.socialIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
