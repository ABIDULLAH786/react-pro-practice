import React from 'react'
import { messagesData } from '../../assets/data/messages'
import SenderMessageCard from './SenderMessageCard/SenderMessageCard'
import OwnMessageCard from './OwnMessageCard/OwnMessageCard'

function LoadMessages() {
    let currentLoggedinUserId = 786;
    return messagesData?.map((message, index) =>
        (message.sender?.id == currentLoggedinUserId) ?
            < OwnMessageCard
                content={message.content}
                date={message.date}
                sender={message.sender}
                file={message.file}
                containFile={!!message.file}
            />
            :
            <SenderMessageCard
                content={message.content}
                date={message.date}
                sender={message.sender}
                file={message.file}
                containFile={!!message.file}
            />)

}

export default LoadMessages