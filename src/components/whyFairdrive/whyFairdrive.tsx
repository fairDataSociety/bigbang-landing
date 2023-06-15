import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./whyFairdriveStyles";
import whyFairdriveDark from "../../media/images/why_fairdrive_dark.png";
import whyFairdriveLight from "../../media/images/why_fairdrive_light.png";
import MobileOverlay from "../mobileOverlay/mobileOverlay";

export interface Props {}

function WhyFairdrive(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.WhyFD}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.content}>
            <h1 className={classes.header}>Why Fairdrive?</h1>
            <div>
              <p className={classes.p1}>
                The current economy and its big data companies might abuse their
                high position by infringing the privacy of its users from
                absentmindedly handed-over data, allowing them to grow into a
                trillion-dollar market. By utilizing the blockchain's encryption
                and decentralized nature to guarantee data privacy and
                ownership, a new and better alternative is created.
              </p>
              <div className={classes.p1}>
                <b>
                  Started by{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.paragraphLink}
                    href="src/components/whyFairdrive/whyFairdrive"
                  >
                    Swarm
                  </a>
                  , Fairdrive is establishing the stepping stones of an even
                  wider ecosystem of interoperability and data sovereignty with
                  the support of the{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.paragraphLink}
                    href="src/components/whyFairdrive/whyFairdrive"
                  >
                    Fair Data Society
                  </a>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.imageContainer}>
            <img
              alt="screen shot demo"
              className={classes.image}
              src={theme.name === "dark" ? whyFairdriveDark : whyFairdriveLight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(WhyFairdrive);
