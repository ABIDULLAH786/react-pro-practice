// ConfirmationPage.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { selectError, selectIsLoading, selectIsVerify, verifyEmailLink } from '../../redux/slice/auth';

const ConfirmationPage = () => {
    const path = useLocation();
    const str = path.search;
    const search = str.split('=');
    const token = search.slice(1).join('=');


    const [verificationMessage, setVerificationMessage] = useState('');
    const dispatch = useDispatch();
    const isVerify = useSelector(selectIsVerify)
    const isLoading = useSelector(selectIsLoading)
    const isError = useSelector(selectError)
    useEffect(() => {
        dispatch(verifyEmailLink(token))
        console.log("in use Effect", token)
    }, [token]);
    useEffect(() => {
        if (!isLoading && isVerify) {
            setVerificationMessage('Congratulations! Your email has been verified successfully.');
        } else if (!isLoading && isError) {
            setVerificationMessage('Error: Token expired or invalid');
        }
    }, [isLoading, isVerify, isError])
    return (
        <div>
            <h1>Email Verification</h1>

            {isLoading ? <p>Loagin...</p> : <div>
                <p>{verificationMessage}</p>
            </div>}
        </div>
    );
};

export default ConfirmationPage;
