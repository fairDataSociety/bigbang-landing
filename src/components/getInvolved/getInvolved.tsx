import React, { useContext } from 'react';
import { ThemeContext } from '../../store/themeContext/themeContext';
import useStyles from './getInvolvedStyles';

export interface Props {}

function GetInvolved(props: Props) {
	const { theme } = useContext(ThemeContext);

	const classes = useStyles({ ...props, ...theme });
	const boxContent = [
		{
			header: 'Contribute',
			body: 'Fairdrive is an open-sourced system that encourages developers to interact and iterate. Curious to check out code and discuss about Fairdrive?',
			label: 'Go to Fairdrive repo',
			href: 'https://github.com/fairDataSociety/fairdrive-theapp',
		},
		{
			header: 'Apply for Grant',
			body: 'Have a new dApp idea to build on Fairdrive? Check the Swarm Ecosystem to stay up to date on new grant applications to join the community of developers building on decentralized storage.',
			label: 'Stay updated',
			href: 'https://www.ethswarm.org/ecosystem.html',
		},
	];

	return (
		<div className={classes.GetInvolved}>
			<h2 className={classes.title}>How do I get involved in Fairdrive?</h2>
			<div className={classes.row}>
				<div className={classes.bubbleContainer}>
					<span
						className={`${classes.bubble} ${classes.outer} ${classes.top}`}></span>
					<span
						className={`${classes.bubble} ${classes.inner} ${classes.innerTop}`}></span>
					<span className={classes.line}></span>
					<span
						className={`${classes.bubble} ${classes.outer} ${classes.bottom}`}></span>
					<span
						className={`${classes.bubble} ${classes.inner} ${classes.innerBottom}`}></span>
				</div>
				<div className={classes.cardContainer}>
					{boxContent.map((content) => {
						return (
							<div key={content.label} className={classes.card}>
								<p className={classes.cardTitle}>{content.header}</p>
								<p className={classes.body}>{content.body}</p>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className={classes.button}
									href={content.href}>
									{content.label}
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default React.memo(GetInvolved);
