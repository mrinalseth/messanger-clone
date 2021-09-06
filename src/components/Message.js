import {Card, CardContent } from '@material-ui/core'
import React from 'react'
import './Message.css'

const Message = (props) => {
    const isUser = props.username === props.message.username
        
    return (
        <div className={`message ${isUser && 'message-user'}`}>
            <Card className={isUser? 'message-userCard' : 'message-guestCard'}>
                <CardContent>
                    {props.message.username}: {props.message.text}
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
