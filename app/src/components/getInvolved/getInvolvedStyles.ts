import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '../../store/themeContext/themes';
import { Props } from './getInvolved';

const useStyles = makeStyles(() =>
	createStyles({
		GetInvolved: {
			width: '100%',
			height: 'auto',
			display: 'flex',
			flexDirection: 'column',
			margin: 'auto',
			padding: '0 3rem',
			'@media (min-width: 960px)': {
				height: '100rem',
				width: '70%',
				padding: '0',
			}
		},
		title: {
			font: (style: Props & Theme) => style.typography.h4,
			marginBottom: '4rem',
			'@media (min-width: 960px)': {
				marginBottom: 0,
			}
		},
		row: {
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'center',
			height: '100%',
			width: '100%',
			'@media (min-width: 960px)': {
				alignItems: 'center',
			}
		},
		bubbleContainer: {
			width: '15%',
			height: '50%',
			display: 'none',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'relative',
			'@media (min-width: 960px)': {
				display: 'flex',
			}
		},
		line: {
			backgroundColor: (style: Props & Theme) =>style.backgroundLight3,
			width: '1px',
			height: 'calc(100% - 8rem)',
			margin: '0 auto 0 auto',
			opacity: 0.6,
		},
		bubble: {
			borderRadius: '50%',
			position: 'absolute',
			zIndex: 2,
		},
		outer: {
			width: '8rem',
			height: '8rem',
			backgroundColor: (style: Props & Theme) => style.backgroundDark3,
		},
		inner: {
			width: '4rem',
			height: '4rem',
			backgroundColor: (style: Props & Theme) => style.backgroundDark1,
		},
		top: {
			top: 0,
		},
		bottom: {
			bottom: 0,
		},
		innerBottom: {
			bottom: '2rem',
		},
		innerTop: {
			top: '2rem',
		},
		cardContainer: {
			flexDirection: 'column',
			display: 'flex',
			alignItems: 'flex-end',
			width: '100%',
			marginBottom: '5rem',
			'@media (min-width: 960px)': {
				width: '80%',
				marginBottom: '0'
			}
		},
		card: {
			backgroundColor: (style: Props & Theme) => style.backgroundDark3,
			borderRadius: '1rem',
			width: '100%',
			height: 'auto',
			padding: '4rem',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			margin: '0 0 4rem',
			'@media (min-width: 960px)': {
				height: '30rem',
				margin: '4rem 0',
			}
		},
		header: {
			font: (style: Props & Theme) => style.typography.h5,
			paddingBottom: '5rem',
		},
		cardTitle: {
			font: (style: Props & Theme) => style.typography.body3,
			paddingBottom: '1rem',
			'@media (min-width: 960px)': {
				paddingBottom: '3rem',
			}
		},
		h3: {
			font: (style: Props & Theme) => style.typography.h6,
			paddingBottom: '5rem',
		},
		p2: {
			font: (style: Props & Theme) => style.typography.body1,
			paddingBottom: '5rem',
		},
		body: {
			font: (style: Props & Theme) => style.typography.body1,
			color: (style: Props & Theme) => style.textColorSecondary,
			paddingBottom: '2rem',
		},
		button: {
			width: '26rem',
			padding: '1.2rem 2rem',
			cursor: 'pointer',
			borderRadius: '1rem',
			border: (style: Props & Theme) => `1px solid ${style.textColorPrimary}`,

			color: (style: Props & Theme) => style.textColorPrimary,
			font: (style: Props & Theme) => style.typography.caption1,
			'&:hover': {
				color: (style: Props & Theme) => style.textColorHoverSelected,
			},
			'&:active': {
				color: (style: Props & Theme) => style.textColorHoverSelected,
				backgroundColour: (style: Props & Theme) => style.backgroundLight3,
			},
		},
	})
);

export default useStyles;
