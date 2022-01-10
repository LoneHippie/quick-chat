import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../context/socket';

import styles from './RoomChatDisplay.module.scss';

const RoomChatDisplay = ({ username }) => {

    const socket = useContext(SocketContext);

    useEffect(() => {

        socket.emit('join', username);

        socket.on('servermessage', data => {
            console.log(data);
        });

        socket.on('chatmessage', (data, username) => {
            console.log(`Chat message: ${data} - ${username}`);
        });

        return () => {
            socket.close(username)
        };
    }, []);

    return (
        <div className={styles.display}>
            
        </div>
    )
};

export default RoomChatDisplay;