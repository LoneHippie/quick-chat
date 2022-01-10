import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../context/socket';

import styles from './RoomChatDisplay.module.scss';

const RoomChatDisplay = ({ username }) => {

    const socket = useContext(SocketContext);

    useEffect(() => {

        socket.emit('join', username);

        socket.on('servermessage', message => {
            console.log(message);
        });

        socket.on('chatmessage', ({message, username}) => {
            console.log(`Chat message: ${message} - ${username}`);
        });

        return () => {
            socket.close()
        };
    }, []);

    return (
        <div className={styles.display}>
            
        </div>
    )
};

export default RoomChatDisplay;