import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./whyFairdriveStylesAlt";
import whyFairdriveDark from "../../media/images/myData2021.png";
import whyFairdriveLight from "../../media/images/myData2021.png";
import MobileOverlay from "../mobileOverlay/mobileOverlay";

export interface Props {}

function clickToAward() {
  window.open("https://www.mydata.org/participate/awards/");
}

function WhyFairdrive(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.WhyFD}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.content}>
            <h1 className={classes.header}>Awards</h1>
            <div>
              <div className={classes.p1}>
                <b>
                  {" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.paragraphLink}
                    href="src/components/whyFairdriveAlt/whyFairdriveAlt"
                  >
                    MyData Global
                  </a>{" "}
                  is an award-winning international nonprofit
                </b>
              </div>
              <p className={classes.p1}>
                that facilitates the MyData community of several thousand
                personal data experts and enthusiasts across the globe and is
                identified in the EU data strategy as a promising initiative for
                empowering citizens to exercise their digital rights.
              </p>
              <div className={classes.p1}>
                <b>
                  {" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.paragraphLink}
                    href="src/components/whyFairdriveAlt/whyFairdriveAlt"
                  >
                    MyData Awarded Operators
                  </a>{" "}
                  were required to demonstrate how they create agency for
                  human-centric data control,
                </b>
              </div>
              <p className={classes.p1}>
                and how the data and value flows in their ecosystems. To be
                considered for the award, they must show how their services have
                the potential to interoperate with data sources, data using
                services, and each other. <b></b>Fairdrive has received the
                award in 2021 and 2022 for the Web app and in 2023 for the
                Desktop app.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.imageContainer}>
            <button>
              <img
                alt="screen shot demo"
                className={classes.image}
                src={
                  theme.name === "dark" ? whyFairdriveDark : whyFairdriveLight
                }
                onClick={clickToAward}
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(WhyFairdrive);
