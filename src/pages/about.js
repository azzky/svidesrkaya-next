import { injectIntl, FormattedMessage } from 'react-intl';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { client } from '@/lib/contentful';
import Layout from '@/components/layout/layout';
import * as classes from '@/styles/about.module.scss';

const About = (props) => {
    const { data } = props;

    return (
        <Layout>
            {/* <MainSchema data={{
                title: intl.formatMessage({ id: 'contactpage.title' }),
                metadescription: intl.formatMessage({ id: 'contactpage.seoDescription' })
            }}
            locale={locale}
            isPage/> */}
            <div className={classes.root}>
                <div className={classes.content}>
                    <Image src={data.image.fields.file.url}
                        width={500}
                        height={500}
                        quality={95}
                        alt=""/>
                    <div className={classes.bio}>
                        {documentToReactComponents(data.bio)}
                    </div>
                    <a href={'https://t.me/' + data.tgNickname}
                        rel="norefferer"
                        target="_blank"
                        className={classes.ctaButton}>
                        <FormattedMessage id="about.ctaText"/>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default injectIntl(About);

export const getStaticProps = async ({ locale }) => {
    const res = await client.getEntries({
        content_type: 'about'
    });

    return {
        props: {
            data: res.items[0].fields,
            revalidate: 70,
            locale
        }
    };
};