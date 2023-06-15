import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./setUpCardsStyles";
import {
  Terminal,
  Lightning,
  Stars,
  DiscordPurple,
  TwitterPurple,
} from "../icons/icons";
import SetUpCard from "../base/setUpCard";
import ButtonLink from "../base/buttonLink";
export interface Props {}

function SetupCards(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  const boxContent = [
    {
      icon: <Lightning className={classes.icon} />,
      header: "Try Fairdrive",
      body: "Try out Fairdrive on your desktop and have web3 storage available as if working with local files.",
      label: "Try Desktop App",
      href: "https://fairdatasociety.github.io/fairdrive-desktop-app/",
    },
    {
      icon: <Terminal className={classes.icon} />,
      header: "Develop on web3 storage",
      body: "Contribute to the ecosystem of apps using web3 storage under the Fair Data Protocol specification. See tutorials and libraries available.",
      label: "Develop with FDP",
      href: "https://fairdataprotocol.bzz.link",
    },
    {
      icon: <Stars className={classes.icon} />,
      header: "Join the community",
      body: "Stay updated on new projects, discuss and iterate on running codes and be among fellow fair data supporters. ",
      label: "Get Started",
      href: "https://github.com/fairDataSociety/fairdrive-theapp",
    },
  ];

  return (
    <section className={classes.wrapper}>
      <div className={classes.title}>Become part of Fairdrive</div>
      <div className={classes.cardContainer}>
        {boxContent.slice(0, 2).map((content) => {
          return (
            <SetUpCard
              key={content.label}
              body={content.body}
              icon={content.icon}
              header={content.header}
              href={content.href}
              footer={<ButtonLink label={content.label} href={content.href} />}
            />
          );
        })}
        <SetUpCard
          key={boxContent[1].label}
          body={boxContent[2].body}
          icon={boxContent[2].icon}
          header={boxContent[2].header}
          href={boxContent[2].href}
          footer={
            <div className={classes.iconLinksContainer}>
              <a
                href="https://discord.gg/RpX5eU4Cpr"
                target="_blank"
                className={classes.iconLink}
                rel="noopener noreferrer"
              >
                <DiscordPurple />
              </a>
              <a
                href="https://twitter.com/fairdatasociety/"
                target="_blank"
                className={classes.iconLink}
                rel="noopener noreferrer"
              >
                <TwitterPurple />
              </a>
            </div>
          }
        />
      </div>
    </section>
  );
}

export default React.memo(SetupCards);
