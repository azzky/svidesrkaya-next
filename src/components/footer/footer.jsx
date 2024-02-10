import { FormattedMessage } from 'react-intl';

import * as classes from './footer.module.scss';

import getDate from '@/hooks/useDate';

const Footer = () => {
    const date = getDate();

    return (
        <footer className={classes.root}>
            <p>
                <FormattedMessage id="footer.copyright" values={{ date }}/>
            </p>
        </footer>
    );
};

export default Footer;