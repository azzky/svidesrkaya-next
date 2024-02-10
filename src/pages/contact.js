import { injectIntl, FormattedMessage } from 'react-intl';

import { client } from '@/lib/contentful';
import Layout from '@/components/layout/layout';
import * as classes from '@/styles/contact.module.scss';

const Contact = (props) => {
    const { data, intl, locale } = props;

    console.log(data);

    return (
        <Layout>
            {/* <MainSchema data={{
                title: intl.formatMessage({ id: 'contactpage.title' }),
                metadescription: intl.formatMessage({ id: 'contactpage.seoDescription' })
            }}
            locale={locale}
            isPage/> */}
            <div className={classes.root}>
                <div>
                    <p>
                        <FormattedMessage id="contact.emailTitle"/>
                    </p>
                    <a href={'mailto:' + data.email}
                        target="_blank">
                        {data.email}
                    </a>
                </div>
                <div>
                    <p>
                        <FormattedMessage id="contact.instaTitle"/>
                    </p>
                    <a href={'https://instagram.com/' + data.instagram}
                        target="_blank">
                        {data.instagram}
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default injectIntl(Contact);

export const getStaticProps = async ({ locale }) => {
    const res = await client.getEntries({
        content_type: 'contact'
    });

    return {
        props: {
            data: res.items[0].fields,
            revalidate: 70,
            locale
        }
    };
};