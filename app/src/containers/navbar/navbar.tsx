import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./navbarStyles";
import { Logo, Moon, Sun } from "../../components/icons/icons";
import { Link } from "react-router-dom";
import { ReactComponent as FairDriveLogotypeWhiteSVG } from "../../media/images/logotype-white.svg";
import { ReactComponent as FairDriveLogotypeDarkSVG } from "../../media/images/logotype-dark.svg";

export interface Props {}

function Navbar(props: Props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const classes = useStyles({ ...props, ...theme });

  return (
    <header className={`${classes.Navbar} ${open ? "open" : ""}`}>
      <Link to="/" className={classes.logo}>
        {theme.name === "dark" ? (
          <FairDriveLogotypeWhiteSVG />
        ) : (
          <FairDriveLogotypeDarkSVG />
        )}
      </Link>
      <nav className={`${classes.navMenu} ${open ? "open" : ""}`}>
        <div
          onClick={toggleTheme}
          className={`${classes.navLink} ${classes.themeTrigger} ${
            open ? "open" : ""
          }`}
        >
          {theme.name === "light" ? (
            <Moon className={classes.themeIcon} />
          ) : (
            <Sun className={classes.themeIcon} />
          )}
        </div>
      </nav>
      <div className={classes.mobileElementsWrapper}>
        <div onClick={toggleTheme} className={`${classes.mobileThemeTrigger}`}>
          {theme.name === "light" ? (
            <Moon className={classes.themeIcon} />
          ) : (
            <Sun className={classes.themeIcon} />
          )}
        </div>
        <div className={classes.navIcon} onClick={() => setOpen(!open)}>
          <span className={`${classes.bar} ${open ? "open" : ""}`}></span>
          <span className={`${classes.bar} ${open ? "open" : ""}`}></span>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Navbar);
