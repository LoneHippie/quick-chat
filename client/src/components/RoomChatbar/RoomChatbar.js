import React, { useState, useContext } from 'react';
import { SocketContext } from '../../context/socket';

import styles from './RoomChatbar.module.scss';

const RoomChatbar = ({ username }) => {

    const socket = useContext(SocketContext);

    const [ message, setMessage ] = useState('');

    const emitNewMessage = (data) => {
        socket.emit('sendmessage', { message: data, username: username });
        setMessage('');
    };

    return (
        <div className={styles.container}>
            
            <div className={styles.chatbar}>
                <input 
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    disabled={ !message.length }
                    onClick={() => emitNewMessage(message)}
                >Send</button>
            </div>

        </div>
    )
};

export default RoomChatbar;