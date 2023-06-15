import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./alertBannerStyles";
import { Warning } from "../icons/icons";

export interface Props {
  bannerContent: string;
  buttonContent: string;
  onButtonClicked: () => void;
}

function AlertBanner(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.AlertBanner}>
      <div className={classes.itemsWrapper}>
        <Warning className={classes.warningIcon} />
        <div className={classes.betaWarningText}>{props.bannerContent}</div>
        <button
          onClick={() => props.onButtonClicked()}
          className={classes.agree}
        >
          {props.buttonContent}
        </button>
      </div>
    </div>
  );
}

export default React.memo(AlertBanner);
