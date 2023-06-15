import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '../../store/themeContext/themes';
import { Props } from './mobileOverlay';

const useStyles = makeStyles(() =>
	createStyles({
		MobileOverlay:{
			display: 'block',
			zIndex: 1000,
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: (style: Props & Theme) => style.backgroundDark,
			opacity: 0.97,
			'@media (min-width: 960px)': {
				display: 'none',
			}
		}
	})
);

export default useStyles;
