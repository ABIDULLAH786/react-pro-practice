import React, { useRef } from 'react'
import ButtonFilled from '../common/Button/ButtonFilled'

function ChooseFileButton() {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <div>
            <input
                type="file"
                id="file-upload"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />


            <ButtonFilled onClick={handleButtonClick} htmlFor="file-upload" text="Choose file..." backgroundColor='#FFF' color='#344054' border="none" />
        </div>
    )
}

export default ChooseFileButton