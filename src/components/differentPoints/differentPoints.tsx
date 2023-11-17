import React from "react";
import { useTheme } from "../../store/themeContext/themeContext";
import useStyles from "./differentPointsStyles";

export interface Props {}

function DifferentPoints(props: Props) {
  const { theme } = useTheme();

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.WhyFD}>
      <div className={classes.container}  style={{marginTop: '2rem'}}>
        <div>
          <div className={classes.content}>
            <h1 className={classes.header}>What makes Fairdrive different</h1>
            <div>
              <div className={classes.p1}>
                <strong>Experience True Data Ownership:</strong>{" "}
                   With Fairdrive, you are in complete control of your data, with no risk of blocked access or deletion.
              </div>

              <div className={classes.p1}>
                <strong>Security and Privacy You Can Trust:</strong>{" "}
                With encrypted data by default, Fairdrive allows you to control data with your keys.
              </div>

              <div className={classes.p1}>
                <strong>Share Your Data on Your Terms:</strong>{" "}
                Fairdrive empowers you to decide who and when to share your data, without any third parties involved.
              </div>

              <div className={classes.p1}>
                <strong>Explore the World of Web3 Apps:</strong>{" "}
                Fairdrive offers dynamic app options through the integrated app store, so you can explore and discover new possibilities.
              </div>

              <div className={classes.p1}>
                <strong>Referral System:</strong>{" "}
                Invite your friends to join Fairdrive and receive free storage as a token of our gratitude for helping us grow our community.
              </div>

              <div className={classes.p1} style={{marginTop: '3rem'}}>
                Be among the pioneers in taking complete control over your data. By signing up for our waitlist, you not only gain the privilege to claim free storage but also unlock the potential for greater rewards through our referral system. Don't miss out on this opportunity to shape the future of data ownership. Sign up today and seize control of your digital destiny!
              </div>

              <div className={classes.p1} style={{
                marginTop: '2rem',
                marginRight: '0',
                // display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center'
              }}>
                {/*<div className={classes.newsletterBar}>*/}
                {/*  <input*/}
                {/*    className={classes.newsletterBarInput}*/}
                {/*    type="text"*/}
                {/*    placeholder="Enter your email"*/}
                {/*  />*/}
                {/*  <button type="button" className={classes.newsletterBarSubmit}>*/}
                {/*    GET EARLY ACCESS*/}
                {/*  </button>*/}
                {/*</div>*/}
                <div className="klaviyo-form-TUV2ne"></div>

                <p style={{
                  color: '#888',
                  opacity: 0.6,
                  fontSize: '1.8rem',
                  textAlign: 'center',
                }}>
                  The first 1000 signups will be among the recipients of free storage
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DifferentPoints);
