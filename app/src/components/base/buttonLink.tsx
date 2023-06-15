import React, { useContext} from 'react';
import { ThemeContext } from '../../store/themeContext/themeContext';
import useStyles from './buttonLinkStyles';

export interface Props {
    href: string
    label: string
}

function ButtonLink(props: Props) {
    const { theme } = useContext(ThemeContext);
    const {href, label} = props;
    const classes = useStyles({ ...props, ...theme });
                return (
                    <a
                        className={classes.link}
                        rel='noopener noreferrer'
                        target='_blank'
                        href={href}>
                        {label}
                    </a>
                );
}

export default React.memo(ButtonLink);
