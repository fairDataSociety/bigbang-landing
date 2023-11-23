import React, { useEffect } from 'react'
import { useTheme } from '../../store/themeContext/themeContext'
import useStyles from './differentPointsStyles'
import { Typography } from '@mui/material'

export interface Props {
}

function DifferentPoints(props: Props) {
  const {theme} = useTheme()

  const classes = useStyles({...props, ...theme})

  const [showThanks, setShowThanks] = React.useState(false)

  useEffect(() => {
    window._klOnsite = window._klOnsite || []
    window._klOnsite.push(['openForm', 'TUV2ne'])
  }, [])

  return (
      <div className={classes.WhyFD}>
        <div className={classes.container} style={{marginTop: '2rem'}}>
          <div>
            <div className={classes.content}>
              {/*<h1 className={classes.header}>What makes Fairdrive different</h1>*/}
              <Typography variant="h2" gutterBottom={true} style={{marginLeft: '2rem'}}>
                <b>
                  What makes Fairdrive different
                </b>
              </Typography>
              <div>
                <div className={classes.p1}>
                  <strong>Secure Storage:</strong>{' '}
                  Encrypted and protected, your files are safe within Swarm’s decentralized network.
                </div>

                <div className={classes.p1}>
                  <strong>True Data Ownership:</strong>{' '}
                  Claim complete ownership over your data, deciding who accesses it and when.
                </div>

                <div className={classes.p1}>
                  <strong>User-Friendly Interface:</strong>{' '}
                  Easily manage your files with our intuitive platform, designed for simplicity and efficiency.
                </div>

                <div className={classes.p1}>
                  <strong>Developer Friendly:</strong>{' '}
                  Utilize a GDPR-compliant system that seamlessly integrates with your dApps, respecting user privacy.
                </div>

                <div className={classes.p1}>
                  <strong>Decentralized AI Integration:</strong>{' '}
                  Embrace AI that champions privacy, ready for a future where your data stays private.
                </div>

                <div className={classes.p1}>
                  <strong>Data Interoperability:</strong>{' '}
                  Effortlessly connect and transfer data across a growing ecosystem of dApps, thanks to built-in interoperability features.
                </div>

                <div className={classes.p1}>
                  <strong>Expanding dApp Store:</strong>{' '}
                  Explore and use a diverse range of dApps, all while maintaining sovereignty over your data.
                </div>

                {/*<div className={classes.header} style={{marginTop: '3rem'}}>*/}
                {/*  Reserve Your Spot as an Early Adopter*/}
                {/*</div>*/}

                <Typography variant="h2" gutterBottom={true} style={{marginLeft: '2rem'}}>
                  <b>
                    Reserve Your Spot as an Early Adopter
                  </b>
                </Typography>

                {/*<div className={classes.headerSmall} style={{marginBottom: '4rem'}}>*/}
                {/*  Join the waiting list*/}
                {/*</div>*/}

                <Typography variant="h3" gutterBottom={true} style={{marginLeft: '2rem'}}>
                  <b>
                    Join the waiting list
                  </b>
                </Typography>

                <div className={classes.p1} style={{
                  marginTop: '2rem',
                  marginRight: '0',
                  // display: 'flex',
                  // flexDirection: 'column',
                  // alignItems: 'center'
                }}>
                  <p style={{
                    // color: '#888',
                    // opacity: 0.6,
                    // fontSize: '1.8rem',
                    // textAlign: 'center',
                  }}>
                    By entering the waiting list for Fairdrive, you're not just early—you're exclusive. As an early adopter, you'll secure privileged access to a platform that’s setting the new standard for data autonomy. Any future benefits that come with early adoption are just the icing on the cake.
                  </p>
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

                  {showThanks && <div id="sign-result">
                    THANKS FOR SIGNING UP!
                  </div>}

                  {!showThanks && <div id="mauticform_wrapper_fairdrivelaunch" className="form-container">
                    <form autoComplete="false" role="form" method="post"
                          action="https://mt.fairdrive.io/form/submit?formId=1" id="mauticform_fairdrivelaunch"
                          data-mautic-form="fairdrivelaunch" encType="multipart/form-data" onSubmit={()=>{
                      setShowThanks(true)
                    }}>
                      <div className="mauticform-error" id="mauticform_fairdrivelaunch_error"></div>
                      <div className="mauticform-message" id="mauticform_fairdrivelaunch_message"></div>
                      <div className="mauticform-innerform">

                        <div data-mautic-form-page="1">
                          <div id="mauticform_fairdrivelaunch_email" className="mauticform-row">
                            <input id="mauticform_input_fairdrivelaunch_email" name="mauticform[email]"
                                   placeholder="Email" className="email-input" type="email"/>
                            <span className="mauticform-errormsg" style={{display: 'none'}}></span>
                          </div>

                          <div id="mauticform_fairdrivelaunch_subscribe" className="mauticform-row">
                            <button type="submit" name="mauticform[subscribe]"
                                    id="mauticform_input_fairdrivelaunch_subscribe" className="submit-button">Join Waiting List
                            </button>
                          </div>
                        </div>
                      </div>

                      <input type="hidden" name="mauticform[formId]" id="mauticform_fairdrivelaunch_id" value="1"/>
                      <input type="hidden" name="mauticform[return]" id="mauticform_fairdrivelaunch_return" value=""/>
                      <input type="hidden" name="mauticform[formName]" id="mauticform_fairdrivelaunch_name"
                             value="fairdrivelaunch"/>
                    </form>
                  </div>}

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default React.memo(DifferentPoints)
