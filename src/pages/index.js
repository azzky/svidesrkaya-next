import { injectIntl } from 'react-intl';

import { client } from '@/lib/contentful';
import { Gallery, Layout } from '@/components';
// import config from '@/components/meta/config';
// import MainSchema from '@/components/meta/meta';
// import * as classes from '@/components/layout/layout.module.scss';

const Home = ({ images }) => {
    return (
        <>
            {/* <MainSchema isHome
                locale={locale}
                edges={posts}
                data={{
                    title: intl.formatMessage({ id: 'homepage.seoTitle' }),
                    metadescription: intl.formatMessage({ id: 'homepage.seoDescription' })
                }}
            /> */}
            <Layout>
                <Gallery images={images.grid}/>
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