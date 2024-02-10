import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

import * as classes from './navigation.module.scss';

import { menuItems } from '@/constants';

const Navigation = () => (
    <nav className={classes.root}>
        <ul role="menu">
            {menuItems.map((el, i) => (
                <li key={i}
                    role="none">
                    <Link href={`/${el.link}`}
                        role="menuitem">
                        <span className={classes.label}>
                            <FormattedMessage id={el.name}/>
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Navigation;