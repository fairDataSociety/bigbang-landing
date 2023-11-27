import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./overviewStyles";
import { ReactComponent as FairDriveLogotypeDarkSVG } from "../../media/images/logotype-dark.svg";
import { Typography } from '@mui/material'

export interface Props {
  // isAlertShow: boolean;
}

function Overview(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.Overview}>
      <div className={classes.demoSection} style={{marginBottom: '0'}}>
        <p style={{marginBottom: '4rem'}}>
          <FairDriveLogotypeDarkSVG width={250}/>
        </p>
        {/*<p className={classes.headingBig}>*/}
        {/*  Your Data, Your Rules*/}
        {/*</p>*/}

        <Typography variant="h1" align="center" gutterBottom={true} className={classes.headingBig}>
          <b>
            Your Digital Safe Space
          </b>
        </Typography>

        {/*<h1 className={"makeStyles-header-40 makeStyles-header-55"} style={{marginTop: -15}}>Sign up for the waiting list</h1>*/}
        <Typography variant="h2" align="center" gutterBottom={true}>
          <b>
            Get Early Access Now
          </b>
        </Typography>

        <p className={classes.paragraph} style={{marginBottom: '0'}}>
          Imagine a place like Dropbox, but where you have full control—this is Fairdrive. Built on top of Swarm’s decentralized storage, it's a secure spot for your files, without the usual risks of big company cloud storage. It’s simple: your data stays yours, private and protected. With Fairdrive, you get the benefits of storing data online but with the peace of mind that it’s safe and under your command.
        </p>
      </div>
    </div>
  );
}

export default React.memo(Overview);
