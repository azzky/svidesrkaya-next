import React from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import * as classes from './header.module.scss';
import Switcher from '../lang-switcher';

const Header = () => (
    <header className={classes.root}>
        <Logo/>
        <Navigation/>
        <Switcher/>
    </header>
);

export default Header;