import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./setUpCardStyles";

export interface Props {
  header: string;
  body: string;
  href: string;
  icon: React.ReactNode;
  footer: React.ReactNode;
}

function SetUpCard(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { body, header, icon, footer } = props;
  const classes = useStyles({ ...props, ...theme });
  return (
    <div className={classes.card}>
      <div className={classes.iconTitleContainer}>
        <div className={classes.iconWrapper}>{icon}</div>

        <p className={classes.header}>{header}</p>
      </div>
      <p className={classes.body}>{body}</p>
      {footer}
    </div>
  );
}

export default React.memo(SetUpCard);
