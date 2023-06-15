import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./connectWithUsStyles";
import { Directory } from "../icons/icons";
import SetUpCard from "../base/setUpCard";
import ButtonLink from "../base/buttonLink";
export interface Props {}

function ConnectWithUs(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  const boxContent = {
    icon: <Directory className={classes.icon} />,
    header: "Apply for Grant",
    body: "Have a new dApp idea to build on Fairdrive? Check the Swarm Ecosystem to stay up to date on new grant applications to join the community of developers building on decentralized storage.",
    label: "Stay Updated",
    href: "https://app.fairdrive.fairdatasocietye.org/",
  };

  return (
    <section className={classes.connectWithUsWrapper}>
      <h2 className={classes.title}>Connect with us</h2>
      <div className={classes.cardContainer}>
        <SetUpCard
          key={boxContent.label}
          body={boxContent.body}
          icon={boxContent.icon}
          header={boxContent.header}
          href={boxContent.href}
          footer={
            <ButtonLink label={boxContent.label} href={boxContent.href} />
          }
        />
      </div>
      <div className={classes.newsletterBar}>
        <div className={classes.newsletterBarPrefix}>
          Join the email list and keep informed
        </div>
        <input
          className={classes.newsletterBarInput}
          type="text"
          placeholder="Type here"
        />
        <button type="button" className={classes.newsletterBarSubmit}>
          Submit
        </button>
      </div>
    </section>
  );
}

export default React.memo(ConnectWithUs);
