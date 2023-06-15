import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '../../store/themeContext/themes';
import { Props } from './termsAndConditions';

const useStyles = makeStyles(() =>
	createStyles({
		TermsAndConditions: {
			backgroundColor: (style: Props & Theme) => style.backgroundDark,
			height: '100%',
			width: '100%',
			padding: '2rem 3rem 10rem 3rem',
			'@media (min-width: 960px)': {
				padding: '10rem',
			}
		},
		title: {
			font: (style: Theme & Props) => style.typography.h6,
			marginBottom: '2rem',
		},
		paragraph: {
			font: (style: Theme & Props) => style.typography.caption1,
			opacity: 0.6,
			marginBottom: '6rem',
		},
	})
);

export default useStyles;
