import { useState } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import { client } from '@/lib/contentful';
import { Gallery, Layout, NsfwPopup } from '@/components';
import MainSchema from '@/components/meta/meta';

const Home = ({ images, intl }) => {
    const [pageNsfw, setPageNsfw] = useState(false);

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
                    intl={intl}
                    pageNsfw={pageNsfw}/>
            </Layout>
            <NsfwPopup setPageNsfw={setPageNsfw}/>
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