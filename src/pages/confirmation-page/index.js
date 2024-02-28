// ConfirmationPage.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { selectError, selectIsLoading, verifyEmailLink } from '../../redux/slice/auth';

const ConfirmationPage = () => {
    const path = useLocation();
    const str = path.search;
    const search = str.split('=');
    const token = search.slice(1).join('=');


    const [verificationMessage, setVerificationMessage] = useState('');
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    const isError = useSelector(selectError)
    console.log("isError: ", isError)
    console.log("isLoading: ", isLoading)
    useEffect(() => {
        token && dispatch(verifyEmailLink(token))
        console.log("in use Effect", token)
    }, [token]);
    useEffect(() => {
        if (!isLoading && !isError) {
            setVerificationMessage('Congratulations! Your email has been verified successfully.');
        } else if (!isLoading && isError) {
            setVerificationMessage('Error: Token expired or invalid');
        }
    }, [isLoading, isError])
    return (
        <div>
            <h1>Email Verification</h1>

            {isLoading ? <p>Loading...</p> : <div>
                <p>{verificationMessage}</p>
            </div>}
        </div>
    );
};

export default ConfirmationPage;
