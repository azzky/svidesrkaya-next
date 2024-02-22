import { FormattedMessage, injectIntl } from 'react-intl';

import { client } from '@/lib/contentful';
import { Gallery, Layout } from '@/components';
// import config from '@/components/meta/config';
import MainSchema from '@/components/meta/meta';
// import * as classes from '@/components/layout/layout.module.scss';

const Home = ({ images, intl }) => {
    return (
        <>
            <MainSchema data={{
                title: intl.formatMessage({ id: 'homepage.title' }),
                metadescription: intl.formatMessage({ id: 'homepage.description' }),
                keywords: intl.formatMessage({ id: 'homepage.keywords' })
            }}/>
            <h1 className="visually-hidden">
                <FormattedMessage id="homepage.h1"/>
            </h1>
            <h2 className="visually-hidden">
                <FormattedMessage id="homepage.h2"/>
            </h2>
            <Layout>
                <Gallery images={images.grid}
                    intl={intl}/>
            </Layout>
        </>
    );
};

export default injectIntl(Home);

export const getStaticProps = async ({ locale }) => {
    const res = await client.getEntries({
        content_type: 'home'
    });

    return {
        props: {
            images: res.items[0].fields,
            revalidate: 70,
            locale
        }
    };
};