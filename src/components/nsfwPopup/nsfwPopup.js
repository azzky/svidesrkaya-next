'use client';
import { useState, useEffect, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './nsfwPopup.module.scss';

const NsfwPopup = ({ setPageNsfw }) => {
    const [showPopup, setShowPopup] = useState(false);

    const clickYesButton = useCallback(() => {
        setPageNsfw(true);
        if (typeof window !== 'undefined') {
            localStorage.setItem('nsfw', 'true');
            setShowPopup(false);
        }
    }, [setPageNsfw, setShowPopup]);

    const clickNoButton = useCallback(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('nsfw', 'false');
            setShowPopup(false);
        }
    }, [setShowPopup]);

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('nsfw') === 'true') {
            setPageNsfw(true);
        }
        if (typeof window !== 'undefined' && localStorage.getItem('nsfw') !== 'true') {
            setTimeout(() => {
                setShowPopup(true);
            }, 3500);
        }
    }, [setPageNsfw]);

    return (
        <>
            {showPopup && (
                <div className={classes.modal}>
                    <div>
                        <p>
                            <FormattedMessage id="agePopup.text"/>
                        </p>
                        <div className={classes.buttons}>
                            <button type="button"
                                onClick={clickYesButton}>
                                <FormattedMessage id="agePopup.confirm"/>
                            </button>
                            <button type="button"
                                onClick={clickNoButton}>
                                <FormattedMessage id="agePopup.cancel"/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NsfwPopup;