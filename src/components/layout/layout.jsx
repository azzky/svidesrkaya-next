import { SpeedInsights } from '@vercel/speed-insights/next';

import Sprite from '../svg-sprite';
import Header from '../header/header';
import Footer from '../footer/footer';
// import * as classes from './layout.module.scss';
import '@fontsource-variable/open-sans';

const Layout = ({ children }
) => (
    <>
        <Sprite/>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
);

export default Layout;
