import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./mainStyles";
import Overview from "../../components/overview/overview";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import WhyFairdrive from "../../components/whyFairdrive/whyFairdrive";
import WhyFairdriveAlt from "../../components/whyFairdriveAlt/whyFairdriveAlt";
import TermsAndConditions from "../../components/termsAndConditions/termsAndConditions";
import { Routes, Route } from "react-router-dom";
import ConnectWithUs from "../../components/connectWithUs/connectWithUs";
import FairdataPioneer from "../../components/fairdataPioneer/fairdataPioneer";
import SetupCards from "../../components/setUpCards/setUpCards";
import Goals from "../../components/goals/goals";
import Ecosystem from "../../components/ecosystem/ecosystem";

import AlertBanner from "../../components/alertBanner/alertBanner";
import DifferentPoints from '../../components/differentPoints/differentPoints'

export interface Props {}

export default function Main(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  const handleBannerReportBugClicked = () =>
    window.open("https://github.com/fairDataSociety/fairdrive-theapp/issues");

  return (
    <div className={classes.Main}>
      {/*<Navbar />*/}

      {/*<AlertBanner*/}
      {/*  bannerContent="*/}
      {/*Fairdrive is in Beta and provided for evaluation only! File integrity*/}
      {/*persistence and security are not assured! Expect that data in*/}
      {/*Fairdrive can be deleted at any time."*/}
      {/*  buttonContent="Report Bugs"*/}
      {/*  onButtonClicked={() => handleBannerReportBugClicked()}*/}
      {/*/>*/}

      <div className={classes.page}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Overview />
                {/*<FairdataPioneer />*/}
                {/*<Goals />*/}
                {/*<SetupCards />*/}
                {/*<WhyFairdrive />*/}
                <DifferentPoints/>
                {/*<WhyFairdriveAlt />*/}
                {/*<Ecosystem />*/}
              </>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
