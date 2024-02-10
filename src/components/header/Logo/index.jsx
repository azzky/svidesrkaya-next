import Link from 'next/link';

import * as classes from './logo.module.scss';

const Logo = () => (
    <Link href="/"
        className={classes.root}>
        Irina Sviderskaya
    </Link>
);

export default Logo;