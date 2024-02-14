import { ClassNames } from '@emotion/react'
import React from 'react'

function Container({ children }) {
    return (
        <div className={ClassNames.root}>
            {children}
        </div>
    )
}

export default Container