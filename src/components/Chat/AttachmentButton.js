import React, { useRef } from 'react'
import { AttachmentIcon } from '../../assets/icons/attachment-icon'

function AttachmentButton() {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <div onClick={handleButtonClick}>
            <input
                type="file"
                id="file-upload"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
            <AttachmentIcon />
        </div>
    )
}

export default AttachmentButton