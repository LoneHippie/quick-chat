import React, { useState, useContext } from 'react';
import { SocketContext } from '../../context/socket';

import styles from './RoomChatbar.module.scss';

const RoomChatbar = ({ username, userID }) => {

    const socket = useContext(SocketContext);

    const [ message, setMessage ] = useState('');

    const emitNewMessage = (e, data) => {
        e.preventDefault();

        const dateString = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });

        socket.emit('sendmessage', {
            message: data, 
            username: username,
            date: dateString,
            id: userID
        });
        setMessage('');
    };

    return (
        <div className={styles.container}>
            
            <form 
                className={styles.chatbar}
                onSubmit={(e) => emitNewMessage(e, message)}
            >
                <input 
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    disabled={ !message.length }
                    type="submit"
                >Send</button>
            </form>

        </div>
    )
};

export default RoomChatbar;