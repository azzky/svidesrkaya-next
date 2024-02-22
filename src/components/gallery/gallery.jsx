import { useReducer } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import * as classes from './gallery.module.scss';

import { lightboxSettings } from '@/constants';

const lightBoxReducer = (state, action) => {
    switch (action.type) {
        case 'open':
            return { ...state, isOpen: true };
        case 'close':
            return { ...state, isOpen: false };
        case 'photoIndex':
            return { ...state, photoIndex: action.photoIndex };
        case 'photoIndex_Open':
            return { isOpen: true, photoIndex: action.photoIndex };
        default:
            return state;
    }
};

const Gallery = (props) => {
    const {
        images,
        intl
    } = props;

    const [lightBoxVal, lightBoxDispatch] = useReducer(lightBoxReducer, {
        photoIndex: 0,
        isOpen: false,
    });

    return (
        <section>
            <ul className={classes.grid}>
                {images.map((el, index) => (
                    <li key={index} className={index}>
                        <Image
                            alt={intl.formatMessage({ id: 'imagesAlt' }, {
                                person: el.fields.description,
                                hasName: el.fields.description?.length > 0
                            })}
                            src={el.fields.file.url}
                            width={el.metadata.tags.length > 0 ? 50 : 500}
                            height={el.metadata.tags.length > 0 ? 50 : 500}
                            quality={95}
                            onClick={() => lightBoxDispatch({
                                type: 'photoIndex_Open',
                                photoIndex: index
                            })}/>
                    </li>
                ))}
            </ul>
            {lightBoxVal.isOpen && (
                <Lightbox
                    mainSrc={images[lightBoxVal.photoIndex].fields.file.url + lightboxSettings}
                    nextSrc={images[(lightBoxVal.photoIndex + 1) % images.length].fields.file.url + lightboxSettings}
                    prevSrc={images[(lightBoxVal.photoIndex + images.length - 1) % images.length].fields.file.url
                        + lightboxSettings}
                    onCloseRequest={() => lightBoxDispatch({ type: 'close' })}
                    onMovePrevRequest={() =>
                        lightBoxDispatch({
                            type: 'photoIndex',
                            photoIndex:
                                    (lightBoxVal.photoIndex + imagesLightbox.length - 1) % images.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        lightBoxDispatch({
                            type: 'photoIndex',
                            photoIndex: (lightBoxVal.photoIndex + 1) % images.length,
                        })
                    }/>
            )}
        </section>
    );
};

export { Gallery };