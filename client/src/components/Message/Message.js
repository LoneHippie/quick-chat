import React from 'react';

import styles from './Message.module.scss';

const Message = ({ message }) => {

    return (
        <div 
            className={styles.message}
            style={{
                alignSelf: message.isFromOrigin ? 'flex-start' : 'flex-end',
                background: message.isFromOrigin ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'
            }}
        >
            <div 
                className={styles.message__name}
                style={{textAlign: message.isFromOrigin ? 'left' : 'right'}}
            >
                {message.username}
            </div>
            <p 
                className={styles.message__content}
                style={{textAlign: message.isFromOrigin ? 'left' : 'right'}}
            >
                {message.content}
            </p>
            <div 
                className={styles.message__date}
                style={{textAlign: message.isFromOrigin ? 'left' : 'right'}}
            >
                {message.date}
            </div>
        </div>
    )
};

export default Message;
