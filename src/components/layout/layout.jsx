import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from '../header/header';
import Footer from '../footer/footer';
// import * as classes from './layout.module.scss';
import '@fontsource-variable/open-sans';

const Layout = ({ children }
) => (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        <SpeedInsights/>
    </>
);

export default Layout;
